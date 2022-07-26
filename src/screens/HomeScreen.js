import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { Stack, Chip } from "@react-native-material/core";

import Entypo from "react-native-vector-icons/Entypo";
import { useTheme } from "@react-navigation/native";

import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Chips from "../components/Chips";
import Tabs from "../routes/Tabs";

const HomeScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 30}}>
        <TouchableOpacity onPress={() => openDrawer()}>
          <Entypo
            style={{
              alignItems: "center",
              height: 40,
              width: 40,
              borderRadius: 30,
            }}
            name="menu"
            size={40}
            color={"#013a35"}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 20 }}>Home</Text>
      </View>
      <Searchbar
        style={{ width: "95%", backgroundColor: "#EDEEEF", marginTop: 10,marginLeft:10,marginRight:10 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Image
        source={require("../../assets//images/bannerheader.png")}
        style={{ height: 200, width: "95%", margin: 10, borderRadius: 5 ,}}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between",padding:10 }}>
        <Text style={{  fontSize: 18 }}>Popular Categories</Text>
        <Text style={{ fontSize: 15, color: "grey", alignSelf: "flex-end" }}>
          See all
        </Text>
      </View>
      
          <Tabs/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',

    //padding: 10,
    backgroundColor:'white'

  },
});
