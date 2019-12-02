import React from 'react';
import {SafeAreaView} from 'react-native';
import {RootNavigator, NavigationService} from './src/navigation/';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    </SafeAreaView>
  );
};

export default App;
