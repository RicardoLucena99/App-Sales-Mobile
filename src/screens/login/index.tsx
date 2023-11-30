import { StyleSheet, Text, View } from 'react-native';

import { ImputText } from '../../components/TextImput';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <ImputText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#819FF7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
  },
});
