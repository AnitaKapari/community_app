import { StyleSheet, TouchableOpacity,ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from '../components/Header';

const SettingsScreen = () => {

  return (
    <View style={styles.container}>
      <Header headerText={"Settings"} iconName={"arrow-back"}></Header>
      <ScrollView>
        <View style={styles.view}>
          <TouchableOpacity
           // onPress={() => navigation.navigate("MyProfileScreen")}
          >
            <Text style={styles.text}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
           // onPress={() => navigation.navigate("OrderListScreen")}
          >
            <Text style={styles.text}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          //</View>onPress={() => console.log("Eagle Policies")}
          >
            <Text style={styles.text}>Eagle Policies </Text>
          </TouchableOpacity>

          <TouchableOpacity
         // onPress={() => console.log("Privacy and Safety")}
          >
            <Text style={styles.text}>Privacy and Safety</Text>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => console.log(" Personal Document")}
           >
            <Text style={styles.text}>Personal Document</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffff'
  },

  text: {
      fontSize: 18,
      marginTop: 20,
      color:'#7F7F7F'
  },
 
  view: {
      marginTop: 5,
      backgroundColor: 'white',
      padding: 20,
  }

})