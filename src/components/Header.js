import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerText,iconName }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={() => navigation.goBack()}>
        <Ionicons style={styles.icon} name={iconName} size={30} />
      </TouchableOpacity>
      <Text style={{marginLeft:15,fontSize:20}}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    color: "white",
    flexDirection: "row",
    padding: 10,
    marginTop:20
  },
  
  icon: {
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  headerText:{
    marginLeft:10,
  
  }
});
