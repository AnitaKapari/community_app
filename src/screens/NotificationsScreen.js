import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Platform,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import Header from '../components/Header';

export default function NotificationScreen() {
  const navigation = useNavigation();

  const notificationDATA = [
    {
      id: 3,
      image: "https://bootdey.com/img/Content/avatar/avatar7.png",
      name: "March SoulLaComa",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      attachment: "https://via.placeholder.com/100x100/FFB6C1/000000",
    },
    {
      id: 2,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      name: "John DoeLink",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      attachment: "https://via.placeholder.com/100x100/20B2AA/000000",
    },
    {
      id: 4,
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      name: "Finn DoRemiFaso",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      attachment: "",
    },
    {
      id: 5,
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      name: "Maria More More",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      attachment: "",
    },
    {
      id: 1,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
      name: "Frank Odalthh",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      attachment: "https://via.placeholder.com/100x100/7B68EE/000000",
    },
    {
      id: 6,
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
      name: "Clark June Boom!",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      attachment: "",
    },
    {
      id: 7,
      image: "https://bootdey.com/img/Content/avatar/avatar5.png",
      name: "The googler",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      attachment: "",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [selectedall, setSelectedAll] = useState([]);

  return (
    <View style={styles.container}>

    <Header headerText={"Notifications"} iconName={"arrow-back"}></Header>

      <View style={{ flexDirection: "row" ,justifyContent:'flex-end',}}>
        <TouchableOpacity
          style={{ alignItems: "center", paddingVertical: 5 }}
          onPress={() => setChecked(!checked)}
        >
          <Text style={{ color: "black", fontSize: 18}}>Select All</Text>
        </TouchableOpacity>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
            //console.log(checked ? "unchecked" : "checked")
          }}
        />
      </View>
      <FlatList
        data={notificationDATA}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={{ padding: 10 }}>
              <View style={{height:40,width:40,borderRadius:25,backgroundColor:'grey'}}></View>
              </View>
            
              <View>
                <Text style={{ width: 240,padding: 10 }}>{item.text}</Text>
              </View>

              <Checkbox
                onPress={() => {
                  if (selectedall.includes(item.id)) {
                    setSelectedAll(
                      selectedall.filter((value) => value !== item.id)
                    );
                  } else {
                    setSelectedAll([...selectedall, item.id]);
                  }
                }}
                status={checked ? "checked" : "unchecked"}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff'
  },

  header: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginLeft: 50,
  },
  barsButton: {
    position: "absolute",
    top: 15,
    left: 10,
  },
  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    position: "absolute",
    top: 15,
    left: 90,
  },

  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 3,
  },
});
