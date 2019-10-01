import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, DetailMenuStack, InboxStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    DetailMenu: DetailMenuStack,
    DetailInbox: InboxStack,
    Inbox: InboxStack,
    App: Drawer
  },
  {
    initialRouteName: 'Inbox'
  }
);
