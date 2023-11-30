import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components/Button';
import { ImputText } from '../../components/TextImput';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <ImputText />
      <View style={styles.buttonWidth}>
        <Button onPress={() => console.log('Login realizado com sucesso')} title="Enviar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#819FF7',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontWeight: '500',
  },
  buttonWidth: {
    width: '50%',
  },
});
