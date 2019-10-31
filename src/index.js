import React from "react";

import {StatusBar, SafeAreaView, Text} from "react-native";
//import "~/config/ReactotronConfig";

//import Routes from './routes';
import Header from "./components/Header";

const App = () => (
    <>
        
        <StatusBar barStyle='light-content' backgroundColor='#5f8eb5' />
        
        <SafeAreaView>
            <Header /> 

            <Text>Oiii</Text>

        </SafeAreaView>
        
    </>
);

export default App;