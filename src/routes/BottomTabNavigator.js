import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import PageMain from "../pages/Main";
import Page2 from "../pages/Page2";
import Page3 from '../pages/Page3';

const AppNavigator = createBottomTabNavigator(
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
  }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;