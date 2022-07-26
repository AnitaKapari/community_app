import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import ForYouApi from "../api/ForYouApi";
import Swiper from "react-native-swiper";
import Rating from "./Rating";
import ReletedCategoryApi from '../api/ReletedCategoryApi';
import ReletedCategory from '../components/ReletedCategory';
const ForYouDataDetails = ({ route }) => {
  const id = route.params.id;

  console.log(id);
  const selectedItem = ForYouApi.find((element) => {
    return id === element.id;
  });
  console.log(selectedItem);

  return (
    <View style={styles.container}>
      <Header headerText={"Buy Product"} iconName={"arrow-back"}></Header>
      <ScrollView vertical={true}>
        <View>
        <View>
        <Swiper style={styles.wrapper} showsButtons={false}>
            <Image
              style={styles.cardImage}
              source={selectedItem.image}
              resizeMode="contain"
            />
            <Image
              style={styles.cardImage}
              source={selectedItem.image}
              resizeMode="contain"
            />
            <Image
              style={styles.cardImage}
              source={selectedItem.image}
              resizeMode="contain"
            />
          </Swiper>
        </View>
          
          <Text style={styles.title}>{selectedItem.title}</Text>
          <View
            style={{ flexDirection: "row", width: "75%", marginBottom: 10 }}
          >
            <Rating />
            <View style={{ width: "50%" }}></View>
            <Text style={{color:'#AEB1C1'}}>See Review {">"}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15, color: "#333542" }}>Price:</Text>
            <Text style={{ color: "#70AADA" }}>
              {" "}
              {"\u20B9"} {selectedItem.rate}.00
            </Text>
          </View>
          <Text style={styles.subtext}>Inclusive of all taxes</Text>
          <Text style={styles.subtext}>You Save: {selectedItem.saving})</Text>
          <Text style={styles.subtext}>Description</Text>
          <Text style={styles.description}>{selectedItem.description}</Text>
          <Text style={styles.subtext}>Benifit</Text>
          <Text style={styles.description}>{selectedItem.benifit}</Text>
        </View>
       <ScrollView horizontal={true}>
       <View  style={{ flexDirection: "row",}}>
       {
           ReletedCategoryApi.map((data,index)=>{
               return (
                   <View key={index} style={{ width: "35%"}}>
                   <ReletedCategory item={data}/>
                   </View>
               )
           })
       }
       </View>
       </ScrollView>
      </ScrollView>
    </View>
  );
};

export default ForYouDataDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffff",
  },
  wrapper: {
    height: 330,
  },
  cardImage: {
    width: "80%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontSize: 22,
    color: "#333542",
    marginBottom: 10,
    //alignSelf: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 20,
  },
  subtext: {
    fontSize: 18,
    color: "#333542",
    marginBottom: 10,
  },
});
