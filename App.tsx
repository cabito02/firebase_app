import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PlayerForm from './src/components/PlayerForm';

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerForm />
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
