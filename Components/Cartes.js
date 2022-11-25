import { View, ScrollView , Animated,  Text , Image , Dimensions} from 'react-native'
import React, {useState , useEffect , useRef} from 'react'
import styles from './styles'
import { AntDesign  , EvilIcons , Ionicons} from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

export default function Cartes() {

   const height = Dimensions.get('window').height ; 
   const width =  Dimensions.get('window').width;
   const [scrollValue, setScrollValue] = useState();
   const animateCard = useRef(new Animated.Value(1)).current; 
   const animateCardTwo = useRef(new Animated.Value(1)).current; 


   function handleAnimation(x) {
    
     const scrolling = x.nativeEvent.contentOffset.x;
     //console.log(scrolling); 
     setScrollValue(scrolling);
   }

   function checkNumbOnescroll(){
    if( scrollValue > 38 && scrollValue < 372 ){
      //console.log('FIRST ONE ENTERED');
       Animated.timing(
        animateCard, 
        {
          toValue:0.3,
          duration:70,
          useNativeDriver:true,
        }
       ).start();
     } else {
      //console.log(' Not here');
      Animated.timing(
        animateCard, 
        {
          toValue:1,
          duration:25,
          useNativeDriver:true,
        }
       ).start()
     }
   }

   function checkNumbTwoscroll(){
    if( scrollValue > 410 && scrollValue < 740 ){
      //console.log('FIRST ONE ENTERED');
       Animated.timing(
        animateCardTwo, 
        {
          toValue:0.3,
          duration:70,
          useNativeDriver:true,
        }
       ).start();
     } else {
      //console.log(' Not here');
      Animated.timing(
        animateCardTwo, 
        {
          toValue:1,
          duration:25,
          useNativeDriver:true,
        }
       ).start()
     }
   }

   useEffect(()=>{
     //  console.log('SCROLLVALUE ' , scrollValue);
     checkNumbOnescroll();
     checkNumbTwoscroll();
   } , [scrollValue])


  return (  
    <View>

       <View style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <View style={styles.plafond}>
                <View style={styles.plafond_childone}>
                    <Text style={styles.plafondInfo}>
                          Limite totale de vos cartes
                    </Text>
                    <Text style={styles.plafondInfo}>
                          $  200.000
                      </Text>
                </View>

                <View style={styles.plafond_childtwo}>  
                    <Ionicons name="md-settings-outline" size={24} color="black" />
                </View>
            </View>
       </View>

       <ScrollView style={styles.creditcards}
           showsHorizontalScrollIndicator={false}
           horizontal={true}

           onScroll={(e)=>{handleAnimation(e)}}
          // onScroll will be fired every 16ms
          scrollEventThrottle={16}

       >

            <View style={styles.cardContain}>

                <Animated.View style={[styles.fcard , {opacity: animateCard}]}>
               
                   
                    <View style={styles}>
                      <Text style={[styles.username  , {color:'#e6e6e6' , fontSize:'15%'}]}>
                          Investor
                       </Text>

                       <View style={styles.logocontainer}>
                          <Image source={require('../image/pone.png')}/>
                          <Image source={require('../image/sanscon.png')}/>
                       </View>
                    </View>

                    <View style={styles}>
                       <Text style={[styles.username  , {color:'#e6e6e6' , fontSize:'15%'}]}>
                           1577     1733     4750     5554
                       </Text>

                    </View>

                    <View style={styles}>
                       <Text style={[styles.username  , {color:'#e6e6e6' , fontSize:'15%' ,  marginTop:width*0.01}]}>
                          EXP : 12/23
                       </Text>

                    </View>

                    <View style={styles.containlog2}>
                       <Text style={[styles.username  , {color:'#e6e6e6' , fontSize:'15%', marginTop:width*0.01}]}>
                          ULYSSE HUGO 
                       </Text >
                       <Image style={styles.log2} source={require('../image/log2.png')}/>
                    </View>

                </Animated.View>

                <Animated.View style={[styles.secchild , {opacity: animateCardTwo}]}>
   
                  <View style={styles}>
                        <Text style={[styles.username  , {color:'#e6e6e6' , fontSize:'15%'}]}>
                            Personal
                        </Text>

                        <View style={styles.logocontainer}>
                            <Image source={require('../image/pone.png')}/>
                            <Image source={require('../image/sanscon.png')}/>
                        </View>
                      </View>

                      <View style={styles}>
                        <Text style={[styles.username  , {color:'#e6e6e6' , fontSize:'15%'}]}>
                            1939     7498     5858     5554
                        </Text>

                      </View>

                      <View style={styles}>
                        <Text style={[styles.username  , {color:'#e6e6e6', fontSize:'15%' ,  marginTop:width*0.01}]}>
                            EXP : 12/23
                        </Text>

                      </View>

                      <View style={styles.containlog2}>
                        <Text style={[styles.username  , {color:'#e6e6e6', fontSize:'15%', marginTop:width*0.01}]}>
                            ULYSSE HUGO 
                        </Text >
                        <Image style={styles.log2} source={require('../image/log2.png')}/>
                      </View>


                </Animated.View>

               {/*  <View style={styles.thirdcard}>
                </View>
 */}
            </View>

       </ScrollView>

       <View>

       </View>

    </View>
  )
}