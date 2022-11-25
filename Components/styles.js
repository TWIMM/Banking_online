import { Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles = {
  
    container: {
       width: width, 
       height: height, 
       padding: width*0.05, 
       display:'flex',
    } , 

    header_horizontal: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        
    } , 
    plafondInfo:{
      fontFamily:'AppleSDGothicNeo-Medium',
      fontSize:width * 0.04, 
      fontWeight:'bold', 
    },
    containertest: {
        width: width, 
        height: height, 
        padding: width*0.05, 
        display:'flex',
        justifyContent:'center', 
        alignItems:'center', 
        
     } , 
     userInfos:{
      display:'flex', 
      flexDirection:'column', 

     },
     plafond_childtwo:{
        marginLeft:'auto'
     },
     chargement:{
      backgroundColor:'#149956', 
      width:'50%', 
      height:height*0.005,
     }, 
     plafond:{
       border:'solid', 
       borderWidth:'2%',
       borderColor:'#149956',
       borderRadius:width*0.03,
       display:'flex', 
       flexDirection:'row', 
       padding:width*0.05,
       width:width*0.8,
       height:height*0.1,
       backgroundColor:'#dbf597'
     },
   
     containchargement:{
      width:width*0.5,
      backgroundColor:'#ccc', 
      overflow:'hidden'
     },
     cardContain:{
       marginTop:width*0.05,
       padding:width*0.05,
       display:'flex', 
       flexDirection:'row',
       alignItems:'center',
       height:height*0.3
     }, 
     transaccontainer:{
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'space-between',
      marginLeft:'auto', 
      marginRight:'auto',
      width:width*0.9,
      height:height * 0.45,
      padding:width*0.05, 
     },
     operationscontainer:{
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'space-between',
        marginLeft:'auto', 
        marginRight:'auto',
        width:width*0.9,
        height:height * 0.45,
        childone:{
           display:'flex', 
           justifyContent:'center' , 
           alignItems:'center', 
           width: width*0.9, 
           height:height*0.1 , 
           padding:width*0.03, 
           backgroundColor:'#149956', 
           borderRadius:width*0.05,
        },
        childtwo:{
          display:'flex', 
          justifyContent:'center' , 
          alignItems:'center', 
          width: width*0.9, 
          height:height*0.1 , 
          padding:width*0.03, 
          backgroundColor:'#149956', 
          borderRadius:width*0.05,
       },
       childthree:{
        display:'flex', 
        justifyContent:'center' , 
        alignItems:'center', 
        width: width*0.9, 
        height:height*0.1 , 
        padding:width*0.03, 
        backgroundColor:'#149956', 
        borderRadius:width*0.05,
     },
     },
  
     fcard:{
       padding:width*0.05,
       marginRight:width*0.1,
       width:width*0.9, 
       backgroundColor:'#149956',
       borderRadius:width*0.03,
       height:height*0.3,
       
     },
     secchild:{
      padding:width*0.05,
       marginRight:width*0.5,
       width:width*0.9, 
       backgroundColor:'#149956',
       borderRadius:width*0.03,
       height:height*0.3,
    },
    thirdcard:{
      padding:width*0.05,
       marginRight:width*0.1,
       width:width*0.9, 
       backgroundColor:'#149956',
       borderRadius:width*0.03,
       height:height*0.3,
    },
     myheader:{
      backgroundColor:'#dbf597',
      display:'flex', 
      flexDirection:'column',
      justifyContent:'space-between',
      padding:width*0.05,
      
     },
     menuone:{
       display:'flex', 
       flexDirection:'column',
       justifyContent:'center', 
       alignItems:'center', 
      
       height:height*0.04,
     },
     menuoneborder:{
      width:width*0.05,
      borderBottom:'solid', 
      borderBottomWidth:width*0.01,
      borderBottomColor:'#149956',
     },
     menutwo:{
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center', 
      height:height*0.04,
     },
     
     menuthree:{
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center',
      height:height*0.04,
    },
    username:{
      fontFamily:'AppleSDGothicNeo-Medium',
      fontSize:width * 0.07, 
      fontWeight:'bold', 
    },
    solde:{
      fontFamily:'AppleSDGothicNeo-Medium',
      fontSize:width * 0.04, 
      fontWeight:'bold', 
    },
    menu:{
      fontFamily:'AppleSDGothicNeo-Medium',
      fontSize:width * 0.05, 
      fontWeight:'bold', 
    },
    footercontainer:{
       backgroundColor:'#dbf597',
       display:'flex', 
       flexDirection:'row', 
       justifyContent:'space-between',
       paddingRight:width*0.1,
       position:'fixed',
       paddingLeft:width*0.1,
       position:'fixed',
       bottom:'5%',
       marginTop:width*0.23,
    },
    circfoot:{
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center',
      width:width*0.17,
      height:width*0.17, 
      borderRadius:width*0.1, 
      border:'solid', 
      borderWidth:width*0.01,
      borderColor:'#eee',
      backgroundColor:'#149956'
    },
   thirdchild:{
      marginTop:width*0.05,
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'space-between', 
      height:height*0.04,
      
    },
     firstchild:{
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'space-between'
     },
     secondchild:{
      marginTop:width*0.05,
      display:'flex', 
      flexDirection:'row',
      alignItems:'center', 
      justifyContent:'space-between', 
      padding:width*0.03,
     },
     threecircles:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:width*0.1,
     },

     contHeader:{
        display:'flex', 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:width*0.01,
        width:width*0.1, 
        height:width*0.1,
        
        
     },
     
     but: {
       width:width*0.3 , 
       height:height*0.02,
       backgroundColor:'red', 
       marginTop:width*0.1,
       borderRadius:width*0.05
     }, 

    viewone:{
       width:width*0.1, 
       height:height*0.05,
       backgroundColor:'#ccc'
    }, 
    circ:{
      width:width*0.02, 
      height:width*0.02, 
      borderRadius:width*0.02,
      backgroundColor:'#149956'
    },

    logocontainer:{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center',
    }, 
    containlog2:{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center',
    } , 
    log2:{
      marginLeft:'auto'
    }, 
    transfertcontainer:{
      backgroundColor:'#dbf597',
      height:height,
      width:width, 
      padding:width*0.05,
    },


}; 
export default styles; 