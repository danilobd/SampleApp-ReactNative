import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PageMain from "./pages/Main";
import Page2 from "./pages/Page2";

const AppNavigator = createStackNavigator({
    Home: PageMain,
    Page2: Page2,
});

const Routes = createAppContainer(AppNavigator);

export default Routes;