import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function Pesquisa() {
  return (
    <View style={styles.container}>
      <Text>Pesquisa de Funcionários</Text>
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
