import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Main, Colors} from '../../styles/';

export default class Footer extends React.Component {
    render() {
        return (
            <View style={Main.footer}>

                <TouchableOpacity activeOpacity={1} style={Main.footerPart}>
                    <Icon name='home' style={{...Main.footerIcon, ...Main.footerIconActive}}/>
                    <Text style={{...Main.footerText, ...Main.footerIconActive}}>الرئيسية</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={Main.footerPart}>
                    <Icon name='package' style={{...Main.footerIcon}}/>
                    <Text style={Main.footerText}>الفئات</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={Main.footerPart}>
                    <Fontisto name='ticket' style={{...Main.footerIcon}}/>
                    <Text style={Main.footerText}>العروض</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={Main.footerPart}>
                    <Fontisto name='person' style={{...Main.footerIcon}}/>
                    <Text style={Main.footerText}>حسابي</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={Main.footerPart}>
                    <Fontisto name='shopping-basket-add' style={{...Main.footerIcon}}/>
                    <Text style={Main.footerText}>عربة التسوق</Text>
                </TouchableOpacity>
            </View>
        );
    }
}