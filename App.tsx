import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
const App = () => {
  const [inputText, setInputText] = useState('');

  const handleButtonPress = () => {
    console.log('Button pressed, Input text:', inputText);
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>

      <Text style={styles.title2}>Image from local directory</Text>
      <Image style={styles.img1} source={require('./Asets/contoh.png')} />

      <Text style={styles.title2}>Image from URL</Text>
      <Image
        style={styles.img1}
        source={{
          uri: 'https://images6.alphacoders.com/519/thumb-1920-519784.jpg',
        }}
      />

      <Text style={styles.title2}>Image from URL</Text>
      <Image
        style={styles.img1}
        source={{
          uri: 'https://www.blackxperience.com/assets/content/blackattitude/blackstyle/3-sub-zero.jpg',
        }}
      />

      <Text style={styles.title2}>Input Field</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
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
  img1: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
