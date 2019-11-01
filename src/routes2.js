import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PageMain from "./pages/Main";
import Page2 from "./pages/Page2";

const AppNavigator = createBottomTabNavigator({
    Home: PageMain,
    Page2: Page2,
});

const Routes = createAppContainer(AppNavigator);

export default Routes;