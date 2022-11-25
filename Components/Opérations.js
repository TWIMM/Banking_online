import { View, Text  , TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';


export default function Opérations() {
  return (
    <View style={styles.operationscontainer}>
          
          <TouchableOpacity style={styles.operationscontainer.childone}>
              <Text style={[styles.username , {color:'black'} ]}>
                    Faire un transfert
              </Text >
          </TouchableOpacity >

          <TouchableOpacity style={styles.operationscontainer.childthree}>
              <Text style={[styles.username , {color:'black'} ]}>
                  Demander une carte
              </Text >
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationscontainer.childthree}>
              <Text style={[styles.username , {color:'black'} ]}>
                   Confirmer un achat en ligne
              </Text >
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationscontainer.childthree}>
              <Text style={[styles.username , {color:'black'} ]}>
                 Retrait par POS
              </Text >
          </TouchableOpacity>

    </View>
  )
}