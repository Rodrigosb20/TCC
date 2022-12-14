import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function Welcome() {
 return (
   <View style={styles.container}>
     <View style={styles.containerLogo}>
      <Image
        source={require('../../assets/logoSaude.png')}
        style={{width:'100%'}}
        resizeMode='contain'
      />
     </View>

     <View style={styles.containerForm}>
      <Text style={styles.title}>saude</Text>
      <Text style={styles.text}>Faça o login para começar</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
     </View>
   </View>
  );
}

  const styles = StyleSheet.create({
    container:{
     flex: 1,
     backgroundColor:'#38A69D'
    },
    containerLogo:{
    flex: 2,
    backgroundColor:'#38A69D',
    justifyContent:'center',
    alignItems:'center'
    },
    containerForm:{
      flex:1,
       backgroundColor:'#fff',
       borderTopLeftRadius:25,
       borderTopRightRadius:25,
       paddingStart:'5%',
       paddingEnd:'5%'
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      marginTop:28,
      marginBottom:12,
    },
    text:{
      color: '#a1a1a1'
    },
    button:{
      position: 'absolute',
      backgroundColor:'#38A69D',
      borderRadius:50,
      paddingVertical:8,
      width: '60%',
      alignSelf: 'center',
      bottom: '15%',
      alignItems:'center',
      justifyContent:'center'
    },
    buttonText:{
      fontSize:18,
      color: '#fff',
      fontWeight:'bold'
    }

  })


