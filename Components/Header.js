import { View,TouchableOpacity, Animated, Text , Dimensions} from 'react-native';
import React , {useState , useEffect , useRef} from 'react';
import styles from './styles';
import { AntDesign  , MaterialIcons, EvilIcons , Ionicons} from '@expo/vector-icons';
import {getHomeStatusState} from './redux/myslices/HomeStatusSlice'
import {useSelector , useDispatch} from 'react-redux'
import {setCartes , setOpe , setTransac} from './redux/myslices/HomeStatusSlice'

export default function Header() {

  const fadeAnimone = useRef(new Animated.Value(0)).current; 
  const limitState = useRef(new Animated.Value(0)).current;
  const fadeAnimtwo = useRef(new Animated.Value(0)).current; 
  const fadeAnimthree = useRef(new Animated.Value(-1)).current; 
  const [HomePageStatus , setHomePageStat] = useState(copyHomeStatus); 
  const copyHomeStatus = useSelector(getHomeStatusState);
  const dispatch = useDispatch();

  
  useEffect(()=>{

     Animated.timing(
      fadeAnimone,
      {
        toValue:1 , 
        duration:1000, 
        useNativeDriver:true,
      } 
     ).start();

     Animated.timing(
      fadeAnimtwo,
      {
        toValue:0 , 
        duration:500, 
        useNativeDriver:true,
      } 
     ).start();

     Animated.timing(
      fadeAnimthree,
      {
        toValue:0 , 
        duration:500, 
        useNativeDriver:true,
      } 
     ).start();

     Animated.timing(
      limitState,
      {
        toValue:1.7 , 
        duration:2500, 
        useNativeDriver:true,
      } 
     ).start();

  } , [])





  const handleOpaTwo = ()=>{

    Animated.timing(
      fadeAnimone , {
        toValue:0, 
        duration:500, 
        useNativeDriver:true,
      }
    ).start();


    Animated.timing(
      fadeAnimtwo , {
        toValue:1, 
        duration:1000, 
        useNativeDriver:true,
      }
    ).start();

    Animated.timing(
      fadeAnimthree , {
        toValue:0, 
        duration:500, 
        useNativeDriver:true,
      }
    ).start();

    dispatch(setCartes())

  }


  const handleOpaThree = ()=>{

    Animated.timing(
      fadeAnimone , {
        toValue:0, 
        duration:500, 
        useNativeDriver:true,
      }
    ).start();


    Animated.timing(
      fadeAnimtwo , {
        toValue:0, 
        duration:500, 
        useNativeDriver:true,
      }
    ).start();

    Animated.timing(
      fadeAnimthree , {
        toValue:1, 
        duration:1000, 
        useNativeDriver:true,
      }
    ).start();

    dispatch(setOpe())


  }


  const handleOpaOne = ()=>{

    Animated.timing(
      fadeAnimone , {
        toValue:1, 
        duration:1000, 
        useNativeDriver:true,
      }
    ).start();


    Animated.timing(
      fadeAnimtwo , {
        toValue:0, 
        duration:500, 
        useNativeDriver:true,
      }
    ).start();

    Animated.timing(
      fadeAnimthree , {
        toValue:0, 
        duration:1000, 
        useNativeDriver:true,
      }
    ).start();

    dispatch(setTransac())
    

  }

  
  return (
    <View style={styles.myheader}>
        <View style={styles.firstchild}>
          {/*   <TouchableOpacity style={styles.contHeader}>
              <AntDesign name="back" size={24} color="red" />
            </TouchableOpacity> */}
              <Text style={[styles.username , {fontSize:'20%'}]}>
                BIENVENU
              </Text>
        </View>

        <View style={styles.secondchild}>
          <TouchableOpacity style={styles.userLog}>
             <EvilIcons name="user" size={70} color="#149956" />
          </TouchableOpacity>

          <View style={styles.userInfos}>
              <View style={styles}>
                  <Text style={styles.username}>
                      Ulysse Hugo
                  </Text>
              </View>

              <View style={styles.containchargement}>
                  <Animated.View style={[styles.chargement , {transform:[{scaleX:limitState,}]}]}>
                   
                  </Animated.View>
              </View>

              <View style={styles}>
                   <Text style={styles.solde}>
                     $ 150.000 / 200.000
                  </Text> 
              </View>
          </View>
        </View>


        <View style={styles.thirdchild}>

           <View style={[styles.menuone ]}>
              <TouchableOpacity 
               onPress={handleOpaOne}
              >
                  <Text style={styles.menu}>
                      TRANSACTIONS
                  </Text>
              </TouchableOpacity>
              <Animated.View style={[{display:'flex' , justifyContent:'center',alignItems:'center', width:'100%' , opacity:fadeAnimone} ]}>
                 <View style={styles.menuoneborder}>
                 
                 </View>
              </Animated.View>
           </View>

           
             
           <View style={[styles.menuone ]}>
              <TouchableOpacity 
               onPress={handleOpaTwo}
              >
                  <Text style={styles.menu}>
                      CARTES
                  </Text>
              </TouchableOpacity>
              <Animated.View style={[{display:'flex' , justifyContent:'center',alignItems:'center', width:'100%' , opacity:fadeAnimtwo} ]}>
                 <View style={styles.menuoneborder}>
                 
                 </View>
              </Animated.View>
           </View>

           <View style={[styles.menuone ]}>
              <TouchableOpacity 
               onPress={handleOpaThree}
              >
                  <Text style={styles.menu}>
                       OPERATIONS
                  </Text>
              </TouchableOpacity>
              <Animated.View style={[{display:'flex' , justifyContent:'center',alignItems:'center', width:'100%' , opacity:fadeAnimthree} ]}>
                 <View style={styles.menuoneborder}>
                 
                 </View>
              </Animated.View>
           </View>
        
        </View>

    </View>

  )
}