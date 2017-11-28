import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import CommentList from '../components/list';

export default class MainScreen extends Component<{}> {
    constructor(props) {
        super(props);
    };
    render() {
        const { navigate } = this.props.navigation;
        const { container, titleBox, } = styles;
        return (
            <View style={container}>
                <View style={titleBox}>
                    <Text>好聚好散大家的发挥</Text>
                </View>
                <CommentList/>
            </View>
        )
    };
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    titleBox: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    title: {
        color: '#fff',
    },
})
