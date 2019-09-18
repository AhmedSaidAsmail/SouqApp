import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    Keyboard,
    ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {search} from '../../middleware/redux/actions/Search';
import {Main} from '../../styles/';

/**
 * Props
 * scrollY
 * headerHeight
 */
const {width, height} = Dimensions.get('window');

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: this.props.headerHeight,
            scrollY: this.props.scrollY,
            searchInputIsFocused: false,
            searchInputHeight: 60,
            resultAreaTopPosition: new Animated.Value(height),
            get diffClampScroll() {
                return Animated.diffClamp(this.scrollY, 0, this.searchInputHeight);
            },
            get searchInputTranslateY() {
                return this.diffClampScroll.interpolate({
                    inputRange: [0, this.searchInputHeight / 4, this.searchInputHeight / 2, this.searchInputHeight],
                    outputRange: [0, 0, 0, -this.searchInputHeight],
                });
            },
        };
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    _keyboardDidHide = () => {
        if (this.state.searchInputIsFocused) {
            this.setState({searchInputIsFocused: false});
            Animated.spring(this.state.resultAreaTopPosition, {
                toValue: height,
                duration: 100,
            }).start();
            this.props.search({keyword: null, terminate: true});
        }
    }

    _startSearch = () => {
        this.setState({searchInputIsFocused: true});
        Animated.timing(this.state.resultAreaTopPosition, {
            toValue: this.state.searchInputHeight,
            duration: 100,
        }).start();
    }
    _terminateSearch = () => {
        if (this.state.searchInputIsFocused) {
            Keyboard.dismiss();
        }
    }
    _loading = () => {
        if (this.props.loading) {
            return (<ActivityIndicator/>);
        }
    }

    render() {
        return (
            <Animated.View style={{
                ...Main.searchInputWrapper,
                top: this.state.headerHeight,
                height: this.state.searchInputHeight,
                translateY: this.state.searchInputTranslateY,
            }}
            >
                <Animated.View style={{...Main.resultArea, top: this.state.resultAreaTopPosition}}>
                    {this._loading()}
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                </Animated.View>
                <View style={Main.searchInputContainer}>
                    <Animatable.View
                        duartion={100}
                        animation={this.state.searchInputIsFocused ? 'bounceInRight' : 'bounceInLeft'}
                        style={Main.searchIconWrapper}>
                        <TouchableWithoutFeedback onPress={() => this._terminateSearch()}>
                            <Icon
                                name={this.state.searchInputIsFocused ? "arrow-left" : "search"}
                                style={Main.searchIcon}/>
                        </TouchableWithoutFeedback>
                    </Animatable.View>
                    <TextInput
                        placeholder="انت بتدور علي ايه؟"
                        style={Main.searchInput}
                        onFocus={() => this._startSearch()}
                        onChangeText={keyword => this.props.search({keyword})}
                    />

                </View>
            </Animated.View>
        );
    }
}

const searchProps = (state) => {
    return {
        loading: state.searchResult.loading,
        result: state.searchResult.result,
        error: state.searchResult.error,
    }
}
export default connect(searchProps, {search})(SearchBar);