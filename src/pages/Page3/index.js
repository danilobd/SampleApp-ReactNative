import React from 'react';

import {View, Text, StyleSheet} from "react-native";

const Page3 = ({navigation}) => (
    <View style={styles.View}>
        <Text>Página 3</Text>
    </View>
);

Page3.navigationOptions = {
    title: "Página 3",
}

const styles = StyleSheet.create({
    View: {
        width: "100%",
        height: "100%",
        backgroundColor: '#EBEBEB',
    },
});

export default Page3;