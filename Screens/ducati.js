 import React from 'react';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
 import {
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
       <Image source={{uri:"https://images.unsplash.com/photo-1624870380386-412eb2f22187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}}
       style={{
       width: 300,
       height: 400,
       marginTop: 20,
       borderRadius: 30
       }}/>
       <Text
       style={{fontSize: 25, fontWeight: 'bold',backgroundColor:"#009387",
       marginTop: 20,padding: 8,borderRadius:10, color: "blue"}}>
       Panigale v4s
         </Text>
       <Text style={{fontSize: 20,marginTop: 10,color: "#5A20CB",fontWeight:'600',marginTop: 20,color:"#5A20CB",fontWeight:'600'}}>
        Mostly used Track Bike
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
    <View style={{alignItems: 'center',backgroundColor: '#abf7ee',flex:1}}>
      <Image source={{uri:"https://images.unsplash.com/photo-1624870380386-412eb2f22187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}}
       style={{
      width: 100,
      height: 150,
      marginTop: 20,
      borderRadius: 6
      }}/>
       <Text style={styles.Text}>
       Engine:- 1103 cc(Liquid-cooled, FI)
       </Text>
       <Text style={styles.Text}>
       Cylinder:- 4  (V4 90° layout)
       </Text>
       <Text style={styles.Text}>
       Power:- 214 hp, 124 Nm
       </Text>
       <Text style={styles.Text}>
       Seat height:- 835 mm
       </Text>
       <Text style={styles.Text}>
       0-100 km/h :- 3.2 seconds
       </Text>
       <Text style={styles.Text}>
       Max speed:- 330 km/h
       </Text>
       <Text style={styles.Text}>
       Mileage:-  8 to 15 km/l
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
       Fuel Tank Capacity:- 16 L
       </Text>
       <Text style={styles.Text}>
       Kerb Weight:- 195 kg
       </Text>
      
      
    </View>)}
 const Tab = createMaterialBottomTabNavigator();
 const Ducati =() => {
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
 
 export default Ducati;
 const styles = StyleSheet.create({
  Text: {fontSize: 20,marginTop: 10,color: "#5A20CB",fontWeight:'600'}})