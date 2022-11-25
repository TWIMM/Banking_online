import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView , Text, View } from 'react-native';
import Homescreen from './Components/Homescreen';
import store from './Components/redux/Store/store';
import { Provider } from 'react-redux';
import styles from './Components/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homescreen">
          <Stack.Screen 
          name="Homescreen" 
          component={Homescreen} 
          options={{
            headerShown:false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
