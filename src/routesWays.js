import PageMain from "./pages/Main";
import Page2 from "./pages/Page2";

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Ways = {
    Page2: {
        screen: Page2,
        navigationOptions: () => ({
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused }) => (
            <Icon name="comments" size={20} color={focused ? '#fff' : '#ddd'} />
          ),
        }),
    },
    Home: {
        screen: PageMain,
        navigationOptions: () => ({
          tabBarLabel: "Inicio",
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={20} color={focused ? '#fff' : '#ddd'} />
          ),
        }),
    },
    Page3: {
        screen: Page2,
        navigationOptions: () => ({
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ focused }) => (
            <Icon name="sliders" size={20} color={focused ? '#fff' : '#ddd'} />
          ),
        }),
    },
}

export default Ways;