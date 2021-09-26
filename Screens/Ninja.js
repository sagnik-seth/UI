import React from 'react';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
 import {
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
 } from 'react-native';
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 
 const Home =({ navigation }) => {
   return(
     <View style={{ alignItems: 'center',backgroundColor: '#abf7ee',flex:1}}> 
       <Image source={{uri:"https://images.unsplash.com/photo-1560319734-fe91ab681d85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}}style={{
       width: 300,
       height: 400,
       marginTop: 20,
       borderRadius: 30
       }}/>
       <Text
       style={{fontSize: 25, fontWeight: 'bold',backgroundColor:"#009387",
       marginTop: 20,padding: 8,borderRadius:10, color: "blue"}}>
      Ninja ZX 10 R
         </Text>
       <Text style={{fontSize: 20,marginTop: 10,color: "#5A20CB",fontWeight:'600',marginTop: 20,color:"#5A20CB",fontWeight:'600'}}>
       Ninja legend of Kawasaki
         </Text>
       <TouchableOpacity
        onPress={() => navigation.navigate('details')}
        >
         <Text style={{color: 'blue',marginTop: 30}}>
           Details
         </Text>
       </TouchableOpacity>
     </View>
     
   )
 }
 const details =({ navigation }) => {
   return(
     <ScrollView style={{backgroundColor: '#abf7ee',alignSelf: 'center'}}>
       <Image source={{uri:"https://images.unsplash.com/photo-1560319734-fe91ab681d85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}} style={{
       width: 100,
       height: 150,
       marginTop: 20,
       borderRadius: 6,
       alignSelf: 'center'
       }}/>
        <Text style={styles.Text}>
        Engine:- 998 cc(Liquid-cooled, FI)
        </Text>
        <Text style={styles.Text}>
        Cylinder:- 4  (inline)
        </Text>
        <Text style={styles.Text}>
        Power:- 203 PS, 114.9 Nm
        </Text>
        <Text style={styles.Text}>
        Seat height:- 835 mm
        </Text>
        <Text style={styles.Text}>
        0-100 km/h :- 3.04 seconds
        </Text>
        <Text style={styles.Text}>
        Max speed:- 300 km/h
        </Text>
        <Text style={styles.Text}>
        Mileage:- 12 to 16.2 km/l
        </Text>
        <Text style={styles.Text}>
        Front Brake:- Double Disc with abs(Brembo)
        </Text>
        <Text style={styles.Text}>
        Rear Brake:- Singel Disc with abs(Brembo)
        </Text>
        <Text style={styles.Text}>
        Gear:- 6 speed with Quick Shifter
        </Text>
        <Text style={styles.Text}>
        Fuel Tank Capacity:- 17 L
        </Text>
        <Text style={styles.Text}>
        Kerb Weight:- 206 kg
        </Text>
     </ScrollView>
   )
 }
 const Tab = createMaterialBottomTabNavigator();
 const Ninja =() => {
   return(
    <View style={{flex: 1}}>
       <StatusBar backgroundColor={"#333452"}/>
       <Tab.Navigator
       initialRouteName="Home"
       activeColor="#173cad"
       inactiveColor="white"
       barStyle={{ backgroundColor: '#009387' }}>
       <Tab.Screen name="Home" component={Home}options={{
           tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="home" color={color} size={28} />
           ),
         }} />
       <Tab.Screen name="details" component={details} options={{
           tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="details" color={color} size={28} />
           ),
         }}/>
     </Tab.Navigator>
     </View>
     
   )
 }
 
 export default Ninja;
 const styles = StyleSheet.create({
  Text: {fontSize: 20,marginTop: 10,alignSelf: 'center',color: "#5A20CB",fontWeight:'600'}})
  