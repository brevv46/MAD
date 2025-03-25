import {View, StyleSheet} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const Exercise3 = () => {
  return (
    <View style={styles.container}>
      <Title title="Welcome" />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Button label="Sign In FaceBook" color="blue" />
      <Button label="Sign In Google" color="red" />
      <Button label="Sign In Apple" color="black" />
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 20,
  },
});
