/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Configure_Axios } from './src/utils/helpfulFunctions';

Configure_Axios();
AppRegistry.registerComponent(appName, () => App);
