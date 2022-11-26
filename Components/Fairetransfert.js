import { SafeAreaView,  View, TextInput, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import {EvilIcons} from '@expo/vector-icons';

export default function Fairetransfert() {
  return (
    <SafeAreaView style={styles.transfertcontainer}>
      <View style={styles}>
         <EvilIcons name="user" size={70} color="#149956" />
      </View>
      <View style={styles.montant}>
         <TextInput style={styles.montant.childone} textAlign='center' placeholder='VEUILLEZ ENTRER LE MONTANT' placeholderTextColor='green' keyboardType='numeric'/>
      </View>
      <View style={styles.montanttwo}>
         <TextInput style={styles.montant.childone} textAlign='center' placeholder='NUMERO IBAN DU DESTINATAIRE' placeholderTextColor='green' keyboardType='numeric'/>
      </View>
      <TouchableOpacity style={styles.montant.makeTrans }>
          <Text style={[styles.username , {fontSize:'20%'}]}>
            Faire un transfert
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


