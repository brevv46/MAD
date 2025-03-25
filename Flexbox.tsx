import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redcontainer} />
      <View style={styles.greencontainer} />
      <View style={styles.bluecontainer} />
    </View>
  );
};
export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  redcontainer: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  greencontainer: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  bluecontainer: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
