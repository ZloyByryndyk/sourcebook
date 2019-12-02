import {createStackNavigator} from 'react-navigation-stack';
import routes from './helpers/routes';
import Main from '../screens/Main';
import Definition from '../screens/Definition';

export default createStackNavigator(
  {
    [routes.main.Main]: {
      screen: Main,
    },
    [routes.main.Definition]: {
      screen: Definition,
    },
  },
  {
    initialRouteName: routes.main.Main,
  },
);
