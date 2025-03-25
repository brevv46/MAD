import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
      <View style={Styles.header}>
        <Image
          style={Styles.profileImage}
          source={require('./Asets/me.jpeg')}
        />
        <Text style={Styles.name}>Bravey Mahagia</Text>
        <Text style={Styles.title}>Universitas Klabat</Text>
        <Text style={Styles.title}>Computer Science</Text>
      </View>

      <TextInput style={Styles.input} placeholder="Bravey Mahagia" />
      <TextInput style={Styles.input} placeholder="Pria" />
      <TextInput style={Styles.input} placeholder="21" />
      <TextInput style={Styles.input} placeholder="Manado" />
      <TouchableOpacity style={Styles.button} activeOpacity={0.5}>
        <Text style={Styles.buttonText}>Simpan</Text>
      </TouchableOpacity>

      <View style={Styles.sectionCentered}>
        <Text style={Styles.sectionTitle}>Informasi Kontak</Text>
        <Text>📧brevi.edvant.mahagia@gmail.com</Text>
        <Text>📱 +6281247776262</Text>
        <Text>📍 Manado, Indonesia</Text>
      </View>

      <View style={Styles.sectionCentered}>
        <Text style={Styles.sectionTitle}>Pendidikan</Text>
        <Text style={Styles.itemTitle}>Universitas Klabat</Text>
        <Text style={Styles.itemSubtitle}>Sistem Informasi (2020-2024)</Text>
      </View>
    </ScrollView>
  );
};

export default Exercise2;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionCentered: {
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
    textAlign: 'center',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
    textAlign: 'center',
  },
});
