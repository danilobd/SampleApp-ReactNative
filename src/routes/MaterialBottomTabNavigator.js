import React from "react";

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import PageMain from "../pages/Main";
import Page2 from "../pages/Page2";
import Page3 from '../pages/Page3';

Icon.loadFont();

const AppNavigator = createMaterialBottomTabNavigator(
  {
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
      screen: Page3,
      navigationOptions: () => ({
        tabBarLabel: "Ajustes",
        tabBarIcon: ({ focused }) => (
          <Icon name="sliders" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: 'white',
    inactiveColor: '#CCC',
    labeled: true,
    barStyle: { backgroundColor: '#5f8eb5', paddingBottom: 0 },
  }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;