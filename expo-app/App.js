import { StatusBar } from 'expo-status-bar';
import { NativeModules, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { RNCPPCode } = NativeModules;

  RNCPPCode.multiply(5, 10).then(res => {
    console.log('res', res);
  });

  return (
    <View style={styles.container}>
      <Text>Hej!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
