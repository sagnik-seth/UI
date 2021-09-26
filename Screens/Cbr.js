import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   Image,
   TouchableOpacity,
 } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 
 const Home =({ navigation }) => {
   return(
     <View style={{ alignItems: 'center',backgroundColor: '#abf7ee',flex:1}}> 
       <Image source={{uri:"https://images.unsplash.com/photo-1625739839403-115ced427495?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1576&q=80"}}style={{
       width: 300,
       height: 400,
       marginTop: 20,
       borderRadius: 30
       }}/>
       <Text
       style={{fontSize: 25, fontWeight: 'bold',backgroundColor:"#009387",
       marginTop: 20,padding: 8,borderRadius:10, color: "blue"}}>
      CBR 1000 RR-R
         </Text>
       <Text style={{fontSize: 20,marginTop: 10,color: "#5A20CB",fontWeight:'600',marginTop: 20,color:"#5A20CB",fontWeight:'600'}}>
         Track Bike of Honda
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
       <Image source={{uri:"https://images.unsplash.com/photo-1625739839403-115ced427495?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1576&q=80"}}style={{
       width: 100,
       height: 150,
       marginTop: 20,
       borderRadius: 6,
       alignSelf: 'center'
       }}/>
        <Text style={styles.Text}>
        Engine:- 1000 cc (Liquid-cooled, FI)
        </Text>
        <Text style={styles.Text}>
        Cylinder:- 4  (inline)
        </Text>
        <Text style={styles.Text}>
        Power:- 215 Bhp, 113Nm 
        </Text>
        <Text style={styles.Text}>
        Seat height:- 834 mm
        </Text>
        <Text style={styles.Text}>
        0-100 km/h :- 2.9 Seconds
        </Text>
        <Text style={styles.Text}>
        Max speed:- 310 km/h
        </Text>
        <Text style={styles.Text}>
        Mileage:-  12.5 to 15 km/l
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
        Fuel Tank Capacity:- 16.1L
        </Text>
        <Text style={styles.Text}>
        Kerb Weight:- 201 Kg
        </Text>
     </ScrollView>
   )
 }
 const Tab = createMaterialBottomTabNavigator();
 const Cbr =() => {
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
 
 export default Cbr;
 const styles = StyleSheet.create({
  Text: {fontSize: 20,marginTop: 10,alignSelf: 'center',color: "#5A20CB",fontWeight:'600'}})
  