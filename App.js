import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import MemoList from './src/components/MemoList';
import Appbar from './src/components/Appbar';
import SignUpScreen from './src/screens/SignUpScreen';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        {/* <MemoList /> */}
        {/* <LoginScreen /> */}
        <SignUpScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
