import React from 'react'
import {View,Text} from 'react-native'
import Vusa from './Screens/Vusa'
import Bmw from './Screens/bmw'
import Ducati from './Screens/ducati'
import R1 from './Screens/R1'
import Ninja from './Screens/Ninja'
import Cbr from './Screens/Cbr'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const App = () =>{
  return(
    (
      <NavigationContainer>
         <Drawer.Navigator initialRouteName="Suzuki">
          <Drawer.Screen name="Bmw" component={Bmw} options={{
          headerStyle:{
            backgroundColor: "#009387"
          },
          drawerItemStyle:{
            backgroundColor:"#33a0d1"
          }}} />
          <Drawer.Screen name="Ducati" component={Ducati} options={{
          headerStyle:{
            backgroundColor: "#009387"
          },
          drawerItemStyle:{
            backgroundColor:"#ff1717"
          }}} />
          <Drawer.Screen name="Suzuki" component={Vusa}options={{
          headerStyle:{
            backgroundColor: "#009387"
          },
          drawerItemStyle:{
            backgroundColor:"#ff8a4f"
          }}} />
          <Drawer.Screen name="Yamaha" component={R1}options={{
          headerStyle:{
            backgroundColor: "#009387"
          },drawerItemStyle:{
            backgroundColor:"#0b4bb3"
          }}} />
          <Drawer.Screen name="Kawasaki" component={Ninja} options={{
          headerStyle:{
            backgroundColor: "#009387"
          },
          drawerItemStyle:{
            backgroundColor:"#3ed402"
          }}} />
          <Drawer.Screen name="Honda" component={Cbr} options={{
          headerStyle:{
            backgroundColor: "#009387"
          },
          drawerItemStyle:{
            backgroundColor:"#ff455b"
          }}} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  )
}
export default App
