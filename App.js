import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation'; 
import useTheme from './src/useTheme'; 



export default function App() {
  const theme = useTheme(); 
  return  (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation />    
      </SafeAreaProvider>
    </PaperProvider>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
