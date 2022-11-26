import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView , Text, View } from 'react-native';
import Homescreen from './Components/Homescreen';
import store from './Components/redux/Store/store';
import { Provider } from 'react-redux';
import styles from './Components/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fairetransfert from './Components/Fairetransfert';
import Acceptonlinepay from './Components/Acceptonlinepay';
import Demandercarte from './Components/Demandercarte';
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
          <Stack.Screen 
          name="Fairetransfert" 
          component={Fairetransfert} 
          options={{
            headerShown:false,
            presentation: 'modal'
          }}
          />
          <Stack.Screen 
          name="Acceptonlinepay" 
          component={Acceptonlinepay} 
          options={{
            headerShown:false,
            
          }}
          />
           <Stack.Screen 
          name="Demandercarte" 
          component={Demandercarte} 
          options={{
            headerShown:false,
            presentation: 'modal'
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
