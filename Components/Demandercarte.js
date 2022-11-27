import { View, Text , Animated  , Dimensions} from 'react-native'
import React, { useEffect, useRef , useState} from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Demandercarte() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const AnimateLogo = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  function navigatetoHomePage(){
    navigation.navigate('Homescreen');
  }

  useEffect(()=>{
    Animated.timing(
      AnimateLogo, 
      {
        toValue:1 , 
        duration:3000, 
        useNativeDriver:true, 
      }
    ).start();

    setTimeout(navigatetoHomePage , 5000);

  } , [] )

  return (

    <View
     style={
      {
      width:width , 
      height:height , 
      display:'flex' , 
      flexDirection:'column' , 
      justifyContent:'center' , 
      alignItems:'center',
      backgroundColor:'#dbf597' , 
      }
     }
    >
    <Animated.View style={{
      
      transform:[{rotateY:AnimateLogo.interpolate({
          inputRange:[0, 1], 
          outputRange:['0deg' , '360deg'],
      })}]
    }}
    >

      <EvilIcons name="user" size={100} color="#149956" />
    </Animated.View>

    <View >
       <Text 
        style={{
          fontFamily:'AppleSDGothicNeo-Medium',
          fontSize:width * 0.07, 
          fontWeight:'bold', 
        }}
       >
           Vous ne pouvez pas commander plus de 02 cartes 
           dans votre compte.
       </Text>
    </View>

  </View>


  )
}