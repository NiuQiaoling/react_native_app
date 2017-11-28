import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Picker,
    ProgressViewIOS,
} from 'react-native';

export default class ProfileScreen extends Component<{}> {
    constructor(props) {
        super(props);
    };
    static navigationOptions = {
        title: '与我相关',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text>1</Text>
                </View>
                <View style={styles.right}>
                    <View style={styles.top}>
                        <Text>2.1</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text>2.2</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.top}>
                        <Text>3.1</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text>3.2</Text>
                    </View>
                </View>
            </View>
        )
    };
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        margin: 10,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
    },
})
