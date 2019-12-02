import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import routes from './helpers/routes';
import DefinitionNavigator from './DefinitionNavigator';

const AppNavigator = createStackNavigator(
  {
    [routes.root.Main]: {
      screen: DefinitionNavigator,
    },
  },
  {
    initialRouteName: routes.root.Main,

    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
