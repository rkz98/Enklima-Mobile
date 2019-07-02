import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Menu from '~/pages/Menu/menu';
import CreateReport from '~/pages/CreateReport/createReport'

const Routes = createAppContainer(createSwitchNavigator({ Main, Menu, CreateReport }));

export default Routes;
