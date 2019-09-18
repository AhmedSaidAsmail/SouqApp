import * as React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    Animated,
    TouchableOpacity,
} from 'react-native';
import {Main, Colors} from '../styles/';
import SearchBar from './_component/SearchBar';
import Carousel from './_component/Carousel';
import Footer from './_component/Footer';
import Icon from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const images = [
    {url: require('../../assets/images/slides/image_0.jpg')},
    {url: require('../../assets/images/slides/image_1.jpg')},
    {url: require('../../assets/images/slides/image_2.jpg')},
    {url: require('../../assets/images/slides/image_4.jpg')},
]

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 60,
            logoHeight: 50,
            scrollY: new Animated.Value(0),
            get scrollMarginTop() {
                return this.headerHeight;
            },
        };
    }

    _onScroll = event => {
        let {y} = event.nativeEvent.contentOffset;
        if (y >= this.state.headerHeight) {
            this.state.scrollY.setValue(y);
        }
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar backgroundColor={Colors.turbo}/>
                <View style={Main.container}>
                    <View style={{...Main.body}}>
                        <View style={{...Main.header, height: this.state.headerHeight}}>
                            <View style={{...Main.logoWrapper, height: this.state.logoHeight}}>
                                <Image
                                    source={require('../../assets/images/logo2.png')}
                                    style={{height: this.state.logoHeight, resizeMode: 'contain'}}
                                />
                            </View>
                        </View>
                        <Animated.ScrollView
                            bounces={false}
                            scrollEventThrottle={16}
                            onScroll={event => this._onScroll(event)}
                            style={{backgroundColor: '#ffffff', paddingTop: this.state.scrollMarginTop}}
                        >
                            <View style={{height: 180}}>
                                <Carousel images={images} duration={8000}/>
                            </View>

                        </Animated.ScrollView>
                        <SearchBar
                            headerHeight={this.state.headerHeight}
                            scrollY={this.state.scrollY}
                        />
                    </View>
                    <Footer/>
                </View>
            </React.Fragment>
        );
    }
}
