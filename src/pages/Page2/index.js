import React from 'react';

import {View, Text, StyleSheet} from "react-native";

const Page2 = ({navigation}) => (
    <View style={styles.View}>
        <Text>Página 2</Text>
    </View>
);

Page2.navigationOptions = {
    title: "Página 2",
}

const styles = StyleSheet.create({
    View: {
        width: "100%",
        height: "100%",
        backgroundColor: 'red',
    },
});

export default Page2;