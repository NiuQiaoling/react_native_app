
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
} from 'react-native';
import CommentItem from './item';

export default class CommentList extends Component<{}> {
    state = {selected: (new Map(): Map<string, boolean>)};
    render() {
        const {containerList, flatList, bottomView, inputText} = styles;
        return (
            <View style={containerList}>
                <View style={flatList}>
                    <FlatList
                        data={[
                            {key: 1},
                            {key: 2},
                            {key: 3},
                            {key: 4},
                            {key: 5},
                            {key: 6},
                            {key: 7},
                            {key: 8},
                        ]}
                        renderItem={
                            (item) => <CommentItem keyExtractor={item.key}/>
                        }
                        extraData={this.state}
                    />
                </View>
                <View style={bottomView}>
                    <Text>444</Text>
                    <TextInput
                        style={inputText}
                        onChangeText={(text) => this.setState({text})}/>
                </View>
            </View>
        )
    };
};
const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
    },
    flatList: {
        flexWrap: 'wrap',
    },
    bottomView: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    inputText: {
        height: 30,
        width: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingLeft: 6,
        paddingRight: 6,
    },
})
