import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function Totais() {
  return (
    <View style={styles.container}>
      <Text>Total de Funcionários</Text>
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
