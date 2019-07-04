import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Menu from '~/pages/Menu/menu';
import CreateReport from '~/pages/CreateReport/createReport';
import ConsultReport from '~/pages/ConsultReport/consultReport';
import ViewReport from '~/pages/ViewReport/viewReport';
import Camera from '~/pages/Camera/camera';
import CreateAccount from '~/pages/CreateAccount/createAccount';

// eslint-disable-next-line max-len
const Routes = createAppContainer(createSwitchNavigator({ Main, Menu, CreateAccount, CreateReport, Camera, ConsultReport, ViewReport }));

export default Routes;
