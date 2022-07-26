import { StyleSheet, TouchableOpacity, Image,   Text, View } from 'react-native'
import React from 'react'
import Rating from "./Rating";
import { useNavigation } from '@react-navigation/native';

const ReletedCategory = ({item}) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("ForYouDataDetails" ,{id: item.id})}>
        <Image
          source={item.image}
          style={{ height: 120, width: '90%', }}
        />
        <View style={styles.cardItems}>
          <Text>{item.title}</Text>
          <View style={styles.cardRateItem}>
            <Text style={{marginTop:5,}}>{'\u20B9'}{item.rate}.00</Text>
            <View style={{width:'4%'}}></View>
            <Rating/>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ReletedCategory

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      //padding:10,
    },
    card: {
      width: '100%',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 4,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      flexDirection:'row',
    },
    cardItems: {
      flexDirection: "column",
      padding:10,
      width: "75%"
    },
    cardRateItem:{
      flexDirection: "row",
      marginTop:10,
    }
  });