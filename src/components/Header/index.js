import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {white, green, red} from 'ansi-colors';

export default function Header(){
    return (
        <View style={styles.View}></View>
    );
}

const styles = StyleSheet.create({
    View: {
        width: "100%",
        height: 60,
        backgroundColor: '#4478a4',
        //borderBottomColor: '#4478a4',
        //borderBottomWidth: 0.5,
    },
});