import React from 'react';

import {View, Button, Text, StyleSheet} from "react-native";

/*export default function Main(){
    return (
        
        <View style={styles.View}> 
            
            <Text>Página 1</Text>

        </View>

    );
}*/

const Main = ({navigation}) => (
    <View style={styles.View}>
        <Text>Página 1</Text>

        <Button style={styles.Button} title="Ir para página 2"
        onPress={()=> navigation.navigate("Page2")}></Button>
    </View>
);

Main.navigationOptions = {
    title: "Página 1",
}

const styles = StyleSheet.create({
    View: {
        width: "100%",
        height: "100%",
        backgroundColor: '#4478a4',
    },
    Button:{
        alignSelf: "center",
        width: 30,
    },
});

export default Main;