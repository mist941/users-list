import React from 'react';
import { View, StyleSheet } from 'react-native';
import UsersListScreen from "./screens/UsersListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <UsersListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '9%',
    paddingBottom: '5%',
    paddingLeft: '1%',
    paddingRight: '1%',
    height: '100%',
  },
});
