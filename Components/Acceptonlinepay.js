import { View, Text ,Animated, TouchableOpacity ,Dimensions} from 'react-native'
import React , {useEffect , useRef , useState} from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo , AntDesign} from '@expo/vector-icons';

export default function Acceptonlinepay() {
   const animeDelete = useRef(new Animated.Value(0)).current;
   const [positionX , setPositionX] = useState(0);
   const width = Dimensions.get('window').width;
   const height = Dimensions.get('window').height;
   const [viewState , setViewState] = useState('none');

   
     const declineOffer = ()=>{
        Animated.spring(animeDelete, {
          toValue:width*2,
          duration:5000,
          useNativeDriver: false,
        }).start();

        setViewState('none');
     }


     const agreeOrder = ()=>{
      Animated.spring(animeDelete, {
        toValue:0,
        useNativeDriver: false,
      }).start();

      setViewState('none');

   }


  return (
    <SafeAreaView style={styles.allpay}>


      <View style={{display:'flex' , flexDirection:'row' , justifyContent:'center' , alignItems:'center'  ,padding:width*0.1}}>
          
            <Animated.View  style={[styles.allpay.childone , {right:animeDelete }]}
                  onStartShouldSetResponder={() => true}
                  onResponderMove={(e) => {
                    console.log( e.nativeEvent.locationX); 
                    setPositionX(e.nativeEvent.locationX);
                    
                  }}

                  onResponderRelease={() => {

                    if (positionX < (width*0.9)/2  ){
                      Animated.spring(animeDelete, {
                        toValue:width*0.2,
                        useNativeDriver: false,
                      }).start();

                      setViewState('flex'); 
                       
                    }

                  }}

            >
                <View  style={styles}>
                    <Text style={[styles.username , {fontSize:'16%'}]}>
                      Numéro de ticket :  #72736383
                    </Text>
                    <Text style={[styles.username , {fontSize:'16%'}]}>
                        Montant : $ 1000
                    </Text>
                    <Text style={[styles.username , {fontSize:'16%'}]}>
                        Paiement mensuel :  Loyer 
                    </Text>
                </View>
              
            </Animated.View>

             <View style={{display:viewState , flexDirection:'row' , justifyContent:'space-between' , width:width*0.2}}>
                  <TouchableOpacity style={styles.Decline}   
                    onPress={declineOffer}
                  >
                     <Entypo name="squared-cross" size={30} color="#149956" />
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={agreeOrder}
                  >
                     <AntDesign name="checkcircle" size={30} color="#149956" />
                  </TouchableOpacity>
             </View>

      </View>

    
    </SafeAreaView>
  )
}