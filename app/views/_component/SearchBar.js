/*
PROPS:
headerHeight,
searchInputHeight
searchInputTranslateY
searchInputIsFocused
startSearch
 */
import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Main} from '../../styles/';

/**
 * Props
 * scrollY
 * headerHeight
 */
const {width, height} = Dimensions.get('window');
export default class SearchBar extends React.Component {
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
                    inputRange: [0, this.searchInputHeight],
                    outputRange: [0, -this.searchInputHeight],
                });
            },
            get resultAreaPaddingTop() {
                return this.searchInputHeight + this.headerHeight + 10;
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

    render() {
        return (
            <Animated.View style={{
                ...Main.searchInputWrapper,
                top: this.state.headerHeight,
                height: this.state.searchInputHeight,
                translateY: this.state.searchInputTranslateY,
            }}
            >
                <Animated.View style={{
                    position: 'absolute',
                    width,
                    height,
                    top: this.state.resultAreaTopPosition,
                    backgroundColor: '#ffffff',
                    zIndex: 1,
                    elevation: 1,
                    paddingTop: 20,
                }}>
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
                    />

                </View>
            </Animated.View>
        );
    }
}