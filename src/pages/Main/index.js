import React from 'react';

import {View, Text, StyleSheet, Image} from "react-native";

const Main = ({navigation}) => (
    
    <View style={styles.Content}>

        <View style={styles.TextBox}>
            <Text style={styles.Title}>
            &lt;Hello Word&gt;
            </Text>
            <Text style={styles.Text}>This is an example of React Native App</Text>
        </View>
         
        <Image source={require("../../images/rocket.png")} style={{width: 120, height: 120, alignSelf: "flex-end"}}></Image>

    </View>
);
//onPress={() => navigation.navigate("Page2")}

const styles = StyleSheet.create({
    Content: {
        width: "100%",
        backgroundColor: '#356994',
        flex: 1,
        padding: 15,
        paddingTop: "10%",
    },

    TextBox: {
        height: "70%",
        marginBottom: 15,
        //backgroundColor: 'red',
        flexDirection: "column",
        justifyContent: "space-around",
    },

        Title: {
            color: 'white',
            fontSize: 105,
            fontWeight: "bold",
        },

        Text: {
            color: "white",
            fontSize: 20,
        },  

    Button:{
        width: "40%",
        backgroundColor: '#379bef',
        padding: 10,
        textAlign: "center",
        alignSelf: "flex-end",
        borderRadius: 4,    
    },
});


Main.navigationOptions = {
    title: "Página 1",
}

export default Main;