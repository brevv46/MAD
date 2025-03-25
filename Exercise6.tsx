import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Exercise6/Input';
import Button from './components/Exercise6/Button';
import Title from './components/Exercise6/Tittle';

const Exercise6 = () => {
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    setTitle('Registration');
    const data = {
      name,
      userName,
      email,
      phone,
      address,
    };
    console.log('Data yang dikirim:', data);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Title title={title} />

        <Input
          label="Name"
          placeholder="Masukkan nama anda"
          value={name} // Ditambahkan
          onChangeText={setName}
        />
        <Input
          label="Username"
          placeholder="Masukkan username anda"
          value={userName} // Ditambahkan
          onChangeText={setUserName}
        />
        <Input
          label="Email"
          placeholder="Masukkan email anda"
          value={email} // Ditambahkan
          onChangeText={setEmail}
        />
        <Input
          label="Address"
          placeholder="Masukkan alamat anda"
          value={address} // Ditambahkan
          onChangeText={setAddress}
        />
        <Input
          label="Phone Number"
          placeholder="Masukkan nomor telepon anda"
          value={phone} // Ditambahkan
          onChangeText={setPhone}
        />

        <Button label="Register" color="purple" onPress={handleClick} />
      </View>
    </ScrollView>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    margin: 20,
  },
});
