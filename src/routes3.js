import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import PageMain from "./pages/Main";
import Page2 from "./pages/Page2";

const AppNavigator = createMaterialBottomTabNavigator({
    Home: PageMain,
    Page2: Page2,
},{
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  });

const Routes = createAppContainer(AppNavigator);

export default Routes;