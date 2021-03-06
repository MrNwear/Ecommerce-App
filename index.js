/**
 * @format
 */

import { AppRegistry } from 'react-native';
if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }
  
import { Provider } from 'react-redux';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import store from './src/redux/store';
import { Configure_Axios } from './src/utils/helpfulFunctions';
import reactotron from './ReactotronConfig';

global.r=reactotron;
const ConnectedApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

Configure_Axios();
AppRegistry.registerComponent(appName, () => ConnectedApp);
