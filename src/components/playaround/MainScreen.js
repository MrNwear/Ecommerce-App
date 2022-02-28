import React from 'react';
import {Component} from 'react';
import {View,Text} from 'react-native';
import {MainScreenText} from './ScreenText';
import {MainScreenView} from './ScreenView';
export class MainScreen extends Component {
  render() {

    return (
        <View>
            
            <MainScreenText />
            <MainScreenView />
        </View>
    );
  }
}
