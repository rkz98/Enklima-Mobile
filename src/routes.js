import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Menu from '~/pages/Menu/menu';
import CreateReport from '~/pages/CreateReport/createReport';
import Camera from '~/pages/Camera/camera';

const Routes = createAppContainer(createSwitchNavigator({ Main, Menu, CreateReport, Camera }));

export default Routes;
