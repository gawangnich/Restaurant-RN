import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, DetailMenuStack, DetailInboxStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    DetailMenu: DetailMenuStack,
    DetailInbox: DetailInboxStack,
    App: Drawer
  },
  {
    initialRouteName: 'DetailInbox'
  }
);
