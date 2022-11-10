import React, { useEffect } from "react";
import { Text, View, TextInput, Image, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
import { Registrarse, Btn2 , Regresar, CrearCuenta} from "../componentes/botones";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "@react-native-firebase/firestore";


const LoginScreen = ({ navigation }) => {


  const [state, setState] = useState({
    email:'',
    contraseña:'',
  })

  const CapturarDatos = (campo, value)=>{
    setState({...state, [campo]: value});
  };


  /*const auth = firebase.auth();
  const handleSingUp=()=>{
    auth.createUserWithEmailPassword(state.email, state.contraseña)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email)
    })
    .catch(error => alert(error.message))
  }*/



  const navi = useNavigation()
  const SignUp = ()=>{
    navi.navigate("SignUp")
  }

  const LoginUsuario= () =>{
    if(state.email==="" || state.contraseña==="")
    {
      Alert.alert("Campos vacios")
    }
    else{
    }
  }

  




 



  return (

    
    <ScrollView style={styles.fondo}>
    
      
      <View style={styles.container}>
      <Image style={styles.img} source={require('../img/logo.jpeg')}/>
      </View>
      <Text></Text>
      <View style={styles.container}>
        <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("email", value)}></TextInput>
        <Text></Text>
        <TextInput  placeholder="Contraseña" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("contraseña", value)}></TextInput>
      </View>
      <Text></Text><Text></Text>
      <SafeAreaView style={styles.container}>
        <Registrarse text ="Iniciar Sesion" onPress={()=>LoginUsuario()} />
        <Text></Text>
      </SafeAreaView>
      <Text></Text>
      <SafeAreaView style={styles.container}>
        <CrearCuenta text ="Crear Cuenta"  onPress={()=>SignUp()}/>
        <Text></Text>
      </SafeAreaView>
      <Text></Text>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.icon} source={require('../img/gg.png')}></Image>
          <SafeAreaView style={styles.container}>
        <Btn2 text ="Iniciar con Google" />
      </SafeAreaView>
        </View>
      </View>
      <View>
        <Text></Text>
        <Text></Text>
      </View>
      
    </ScrollView>
  );
}

const styles= StyleSheet.create({
  fondo:{
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:
  {
    width: 200,
    height: 175,
  },
  icon:{
    width:50,
    height:50
  },
  txtbox:{
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth:1,
    width:250,
    textAlign:'center'
  },
  txtbox2:{
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth:1,
    width:75,
    textAlign:'center'
  },
  btn:{
    fontSize:30,
    backgroundColor:"#00ab4c",
    borderRadius:10,
  }
});

export default LoginScreen;