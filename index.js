/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import store from './src/redux/store';
import { Configure_Axios } from './src/utils/helpfulFunctions';

const ConnectedApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

Configure_Axios();
AppRegistry.registerComponent(appName, () => ConnectedApp);
