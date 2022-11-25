import { View, Text } from 'react-native'
import React , {useState , useEffect} from 'react'
import Header from './Header'
import Homepage from './Homepage'


export default function Homescreen() {
  return (
    <View style={{display:'flex' , flexDirection:'column'}}>
        <Header/>
        <Homepage/>
        
    </View>
  )
}