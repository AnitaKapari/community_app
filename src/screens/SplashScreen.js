import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
     navigation.replace("SignInScreen");
    //  navigation.replace("DrawerMenu");

    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Text style={styles.logoText}>P</Text>
      </View>
      <Text style={styles.text}>Community</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
  },
  logoView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    backgroundColor: "#3691c9",
    alignItems: "center",
    justifyContent: "center",

  },
  logoText: {
    color: "white",
    fontSize: 40,
  },
  text: {
    color: "black",
    fontSize: 30,
    marginTop: 20,
    //fontWeight: 700,
  },
});
