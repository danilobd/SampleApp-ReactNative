import React from "react";

import {StatusBar, SafeAreaView} from "react-native";

import Routes from './routes/MaterialBottomTabNavigator';

const App = () => (
    <>
        <StatusBar barStyle='light-content' backgroundColor='#5f8eb5' />

        <SafeAreaView style={{flex: 1}}>
            <Routes></Routes>
        </SafeAreaView>
 
    </>
);

export default App;