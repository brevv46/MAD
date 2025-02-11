import {Text, View, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <Text style={styles.title2}>React Native</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },
  title2: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
