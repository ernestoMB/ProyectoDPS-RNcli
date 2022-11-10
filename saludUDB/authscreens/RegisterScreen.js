import React, { useEffect } from "react";
import { FlatList, Text, View, TextInput, Image, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
import { Registrarse, Btn2 , Regresar} from "../componentes/botones";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import firestore from '@react-native-firebase/firestore';


const RegisterScreen = ({ navigation }) => {
  
  const navi = useNavigation()
  const Login = ()=>{
    navi.navigate("Registro")
  }






    //leyendo datos de la base

  const [data, setData] = useState()
  const [rtdata, setrtData] = useState([])

  async function loadData(){
    try{
      const datos = await firestore().collection('Usuario').get()
      
      setData(datos.docs)
    }catch(e){
      Alert.alert(e)
    }
  }

  async function loadRTdata()
  {
    const suscriber = firestore().collection('Usuario').onSnapshot(querySnapshot =>{
      const datos = []
      querySnapshot.forEach(documentSnapshot=>{
        datos.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id
        })
      })
      setrtData(datos)
    })
    return()=>suscriber()
  }


  useEffect(()=>{
    loadData()
    loadRTdata()
  }, [])

  
  function renderItem({ item }){
    return(
      <View style={{flexDirection:'row', margin:10}}>
        <Text>{item.data().nombre_user} </Text>
        <Text>{item.data().apellido_user} </Text>
        
      </View>
    )
  }
  function renderRTItem({ item }){
    return(
      <View style={{flexDirection:'column', margin:10}}>
        <Text>{item.nombre_user} </Text>
        <Text>{item.apellido_user} </Text>
        <Text>{item.contraseña} </Text>
        <Text>{item.email} </Text>
        <Text>{item.apellido} </Text>
        <Text>{item.genero} </Text>
        <Text>{item.edad} </Text>
        <Text>{item.peso} </Text>
        <Text>{item.diametro_cadera} </Text>
        <Text>{item.altura} </Text>
        <Text>{item.diametro_cintura} </Text>
        <Text>{item.diametro_cuello} </Text>
      </View>
    )
  }










 //Insertando datosa la base


  const [state, setState] = useState({
    nombre:'',
    apellido:'',
    email:'',
    contraseña:'',
    edad:'',
    altura:'',
    peso:'',
    genero:'',
    cuello:'',
    cintura:'',
    cadera:'',
  })

  const CapturarDatos = (campo, value)=>{
    setState({...state, [campo]: value});
  };

  const AgregarUsuario= () =>{
    if(state.nombre ==="" || state.apellido ==="" || state.email==="" || state.contraseña==="" || state.edad==="" || state.altura==="" || state.peso==="" )
    {
      Alert.alert("Campos vacios")
    }
    else{
      
     try {
      firestore().collection('Usuario').add({
        nombre_user: state.nombre,
        apellido_user: state.apellido,
        email: state.email,
        contraseña: state.contraseña,
        altura: parseInt(state.altura),
        edad: parseInt(state.edad),
        peso: parseInt(state.peso),
        genero: state.genero,
        diametro_cadera: parseInt(state.cadera),
        diametro_cuello: parseInt(state.cuello),
        diametro_cadera: parseInt(state.cintura),
      })
      Alert.alert("¡Datos guardados con exito!")
      } catch (error) {
        console.log(error)
      }
        
    
    
      
    }
  }



  return (

    
    <ScrollView style={styles.fondo}>
    
      
      <View style={styles.container}>
      <Image style={styles.img} source={require('../img/logo.jpeg')}/>
      </View>
     
      <Text style={styles.text}>Formulario de información:</Text>
      <View style={styles.container}>
        <TextInput placeholder="Ingresa tu nombre" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("nombre", value)}></TextInput>
       
        <TextInput placeholder="Ingresa tu Apellido" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("apellido", value)}></TextInput>
        
        <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("email", value)}></TextInput>
        
        <TextInput  placeholder="Contraseña" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("contraseña", value)}></TextInput>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <TextInput keyboardType='numeric'   placeholder="Edad" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("edad", value)}></TextInput><TextInput></TextInput>
          <TextInput keyboardType="numeric" placeholder="Peso(kg)" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("peso", value)}></TextInput><TextInput></TextInput>
          <TextInput keyboardType='numeric' placeholder="Altura(m)" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("altura", value)}></TextInput>
        </View>
        <View style={{flexDirection:'row'}}>
      <TextInput keyboardType='numeric'   placeholder="Cuello(cm)" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("cuello", value)}></TextInput><TextInput></TextInput>
      <TextInput keyboardType="numeric" placeholder="Cintura(cm)" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("cintura", value)}></TextInput><TextInput></TextInput>
      <TextInput keyboardType="numeric" placeholder="Cadera(cm)" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("cadera", value)}></TextInput>
      </View>
      <TextInput  placeholder="Hombre/Mujer" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("genero", value)}></TextInput>
      </View>
      <Text></Text><Text></Text>
      <SafeAreaView style={styles.container}>
        <Registrarse text ="Registrarse" onPress={()=>AgregarUsuario()} />
        <Text></Text>
        <Regresar text='Regresar' onPress={()=>Login()}></Regresar>
      </SafeAreaView>
      <Text></Text><Text></Text>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.icon} source={require('../img/gg.png')}></Image>
          <SafeAreaView style={styles.container}>
        <Btn2 text ="Continuar con Google" />
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
  text:{
    padding:20,

  },
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
    width:80,
    textAlign:'center'
  },
  btn:{
    fontSize:30,
    backgroundColor:"#00ab4c",
    borderRadius:10,
  }
});

export default RegisterScreen;