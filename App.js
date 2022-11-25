import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView , Text, View } from 'react-native';
import Homescreen from './Components/Homescreen';
import store from './Components/redux/Store/store';
import { Provider } from 'react-redux';
import styles from './Components/styles';

export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaView style={styles.generalcontainer} >
          <Homescreen />
        </SafeAreaView>
    </Provider>
  );
}
