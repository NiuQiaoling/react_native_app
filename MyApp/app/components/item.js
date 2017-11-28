
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

export default class CommentItem extends Component<{}> {
    render() {
        const { containerItem, flexDirectionRow, left, right, head, info, nick, up, contentBox,
            contentText, footer, region, time} = styles;
        return (
            <View style={[containerItem, flexDirectionRow]}>
                <View style={left}>
                    <Image
                        source={require('../img/head.png')}
                        style={head} />
                </View>
                <View style={right}>
                    <View style={[flexDirectionRow, info]}>
                        <Text style={nick}>哈哈</Text>
                        <Text style={up}>12345</Text>
                    </View>
                    <View style={contentBox}>
                        <Text style={contentText}>
                            交电话费几句话国际饭店积分党和国家返回的加工费的
                            韩国积分兑换价格多少翻江倒海国际饭店和根据地方和
                            公检法发动机号感觉到好几个
                        </Text>
                    </View>
                    <View style={[flexDirectionRow, footer]}>
                        <Text style={region}>北京</Text>
                        <Text style={time}>3小时前</Text>
                    </View>
                </View>
            </View>
        )
    };
};
const styles = StyleSheet.create({
    containerItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#f6f6f6',
        padding: 10,
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    head: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    right: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 2,
    },
    info: {
        justifyContent: 'space-between',
    },
    contentBox: {
        marginTop: 10,
        marginBottom: 10,
    },
    time: {
        paddingLeft: 20,
    },
})
