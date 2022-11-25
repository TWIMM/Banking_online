import { View, Text  , TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Transactions() {
  return (
    <View style={styles.transaccontainer}>
          
    <View style={styles.transaccontainer}>
        <Text style={[styles.username , {color:'black' , fontSize:'20%'} ]}>
              Aucune transaction pour ce mois.
        </Text >
    </View >


</View>
  )
}