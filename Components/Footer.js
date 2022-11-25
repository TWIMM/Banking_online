import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons  , MaterialIcons, FontAwesome5} from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footercontainer}>
       <TouchableOpacity style={styles.circfoot}>
          <MaterialIcons name="privacy-tip" size={24} color="black" />
       </TouchableOpacity>

       <TouchableOpacity style={styles.circfoot}>
          <FontAwesome5 name="home" size={24} color="black" />  
       </TouchableOpacity>

       <TouchableOpacity style={styles.circfoot}>
          <TouchableOpacity>
             <Ionicons name="md-settings-outline" size={24} color="black" />
          </TouchableOpacity>
       </TouchableOpacity>
    </View>
  )
}