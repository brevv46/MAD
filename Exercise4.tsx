import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      {/* Red top section */}
      <View style={styles.redSection}>
        <View style={styles.topRowContainer}>
          <View style={styles.blackSquare} />
          <View style={styles.yellowSquare} />
          <View style={styles.blackSquare} />
        </View>
      </View>

      {/* Middle white section with logo */}
      <View style={styles.whiteSection}>
        <Image
          source={require('./Asets/logo-with-motto-3 (1).png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Blue bottom section */}
      <View style={styles.blueSection}>
        <View style={styles.bottomRowContainer}>
          <View style={styles.blackSquare} />
          <View style={styles.yellowSquare} />
          <View style={styles.blackSquare} />
        </View>
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  redSection: {
    backgroundColor: 'red',
    height: '25%',
    width: '100%',
    justifyContent: 'center',
  },
  whiteSection: {
    backgroundColor: 'white',
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueSection: {
    backgroundColor: 'blue',
    height: '25%',
    width: '100%',
    justifyContent: 'center',
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  bottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  blackSquare: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    marginRight: 10,
  },
  yellowSquare: {
    backgroundColor: 'yellow',
    height: 90,
    width: 90,
    marginRight: 10,
  },
  logo: {
    width: 400,
    height: 100,
    marginBottom: 10,
  },
  universityText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mottoText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
