//Index.ios.js - place code in here for iOS!!!

// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';

// Create a component
const App = () => {
    return (
      <Text>Some Text</Text>  
    );
}

//render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);

