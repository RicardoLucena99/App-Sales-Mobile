import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

export function ImputText({ ...props }: InputProps) {
  return <TextInput style={styles.container} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    height: 40,
    width: 250,
    color: 'red',
    borderRadius: 20,
    paddingLeft: 10,
  },
});
