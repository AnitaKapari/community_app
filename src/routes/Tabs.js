import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYouComponent from '../components/ForYouComponent';
import ForYouList from '../components/ForYouList';
  
  function NotificationsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Selling!</Text>
      </View>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Devices!</Text>
      </View>
    );
  }

  
const Tab = createMaterialTopTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'white',elevation:0 },
            tabBarIndicatorStyle:{backgroundColor:'#F5F5F5'}
          }}
        >
          <Tab.Screen
            name="Feed"
            component={ForYouList}
            options={{ tabBarLabel: 'For You' }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{ tabBarLabel: 'Best Selling' }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ tabBarLabel: 'Computer' }}
          />
        </Tab.Navigator>
      );
}

export default Tabs

const styles = StyleSheet.create({})