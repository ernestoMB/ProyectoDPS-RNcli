import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pantallas de autentificacion
import LoginScreen from './authscreens/LoginScreen';
import RegisterScreen from './authscreens/RegisterScreen';
import SplashScreen from './authscreens/SplashScreen';

//pantallas dentro de la navegacion de la app
import DietScreen from './screens/DietScreen';
import ProfileScreen from './screens/ProfileScreen';
import RoutineScreen from './screens/RoutineScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Resgistrarse"
    screenOptions={{
      tabBarActiveTintColor : 'blue',
      tabBarShowLabel : false,
      tabBarStyle : {
        height : 70,
        position : 'absolute',
        bottom : 16,
        right : 16,
        left : 16,
        borderRadius : 16,
        showLabel : false,
      },
    }}
    >
     <Tab.Screen
        name="Sesion"
        component={LoginScreen}
        options={{
          //tabBarLabel: 'Iniciar Sesion',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-cog" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
     <Tab.Screen
        name="Registro"
        component={RegisterScreen}
        options={{
          //tabBarLabel: 'Registrarse',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brightness-5" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Inicio"
    screenOptions={{
      tabBarActiveTintColor : 'blue',
      tabBarShowLabel : false,
      tabBarStyle : {
        height : 70,
        position : 'absolute',
        bottom : 16,
        right : 16,
        left : 16,
        borderRadius : 16,
        showLabel : false,
      },
    }}
    >
    <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          //tabBarLabel : 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
    <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          //tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
     <Tab.Screen
        name="Dietas"
        component={DietScreen}
        options={{
          //tabBarLabel: 'Dietas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="nutrition" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
     <Tab.Screen
        name="Rutinas"
        component={RoutineScreen}
        options={{
          //tabBarLabel: 'Rutinas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          ),
          headerShown: false,
        }}
        />
    </Tab.Navigator>
  );
}

export default function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        options={{animationEnabled: false, header: () => null}}
        component={SplashScreen}
      />
      <Stack.Screen
        name="Registro"
        options={{animationEnabled: false, header: () => null}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{animationEnabled: false, header: () => null}}
        component={RegisterScreen}
      />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}