import React, { useState, useEffect, createRef } from "react";
import { View, StyleSheet } from "react-native";
import { Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.sectionTop}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <FontAwesome name="user-circle-o" color="#10a19c" size={40} />
                <View
                  style={{
                    marginLeft: 15,
                    marginTop: 10,
                    flexDirection: "column",
                    width:200
                  }}
                >
                  <Caption style={styles.caption}>Anita</Caption>
                </View>
              </View>
            </View>
          </Drawer.Section>

            <DrawerItem style={{marginTop:20 }}
              icon={({ color, size }) => (
                <Icon name="home-outline" color="#10a19c" size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="chatbubble-ellipses-outline" color="#10a19c" size={size} />
              )}
              label="Chat"
              // onPress={() => {
              //   props.navigation.navigate("SettingsScreen");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Feather name="list" color="#10a19c" size={size} />
              )}
              label="Sell"
              // onPress={() => {
              //   props.navigation.navigate("SettingsScreen");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Feather name="list" color="#10a19c" size={size} />
              )}
              label="My Add"
              // onPress={() => {
              //   props.navigation.navigate("SettingsScreen");
              // }}
            />
  
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="user-circle-o" color="#10a19c" size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("ProfileScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="user" color="#10a19c" size={size} />
              )}
              label="Account"
              // onPress={() => {
              //   props.navigation.navigate("SettingsScreen");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="bells" color="#10a19c" size={size} />
              )}
              label="Notifications"
              onPress={() => {
                props.navigation.navigate("NotificationsScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="setting" color="#10a19c" size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
        </View>
      </DrawerContentScrollView>
      <DrawerItem 
      style={{marginBottom:50}}
        icon={({ color, size }) => (
          <Icon name="exit-to-app" color="#10a19c" size={size} />
        )}
        label="Sign Out"
        onPress={() => {
          signOut();
        }}
      />

      <DrawerItem style={{backgroundColor:"#DADEE3"}}
      label="Copyright 2022 @ Whiz it " />
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTop: {
    justyfyContent: "center",
    alignItem: "center",
  },
  bottomDrawerSection: {
    backgroundColor: "#DADEE3",
  },
  drawerSection: {
    marginTop: 45,
},
});
