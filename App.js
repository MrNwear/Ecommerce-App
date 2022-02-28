/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainScreen } from './src/components/playaround/MainScreen';
import { WelcomeGreeting } from './src/components/playaround/Greeting';
import { AppText } from './src/components/playaround/AppText';
import PlatformTouchable from './src/components/platformTouchable';
import { AppButton } from './src/components/index';
import { Counter } from './src/components/playaround/counter'
import { AddToCartButton } from './src/components/AddToCartButton/AddToCartButton'
class App extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <AddToCartButton />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
export default App;