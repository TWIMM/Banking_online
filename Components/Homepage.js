import { View, Text } from 'react-native'
import React , {useState , useEffect} from 'react'
import Transactions from './Transactions'
import Cartes from './Cartes'
import Opérations from './Opérations'
import {getHomeStatusState} from './redux/myslices/HomeStatusSlice'
import {useSelector} from 'react-redux'
import Footer from './Footer'


export default function Homepage() {
  const [HomePageStatus , setHomePageStat] = useState(copyHomeStatus); 
  const copyHomeStatus = useSelector(getHomeStatusState);
 

  useEffect(()=>{
      setHomePageStat(copyHomeStatus); 
      console.log(HomePageStatus)
  } , [copyHomeStatus , HomePageStatus])

  if (HomePageStatus === 'Transactions'){
    return (
        <View style={{backgroundColor:'#dbf597' , height:'100%'}}>
           <Transactions/>
           <Footer/>
        </View>
    )
  } else if(HomePageStatus === 'Cartes'){
    return (
        <View  style={{backgroundColor:'#dbf597' ,  height:'100%'}}>
           <Cartes/>
           <Footer/>
        </View>
    )
  } else if(HomePageStatus === 'Opérations' ){
    return (
        <View  style={{backgroundColor:'#dbf597' ,  height:'100%'}}>
           <Opérations/>
           <Footer/>
        </View>
    )
  }
}