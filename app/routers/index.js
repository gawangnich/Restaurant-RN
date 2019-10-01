import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, DetailMenuStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    DetailMenu: DetailMenuStack,
    App: Drawer
  },
  {
    initialRouteName: 'DetailMenu'
  }
);
