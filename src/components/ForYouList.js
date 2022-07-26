import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React,{useState} from 'react'
import ForYouComponent from './ForYouComponent'
import ForYouApi from "../api/ForYouApi";

const ForYouList = ({list}) => {
    const [forYouList, setForYouList] = useState([""])

  return (
    <View style={styles.container}>
   <ScrollView>
   {
    ForYouApi.map((data,index)=>{
        return (
            <View key={index} style={{ margin:5}}>
            <ForYouComponent item={data}/>
            </View>
        )
    })
}
   </ScrollView>
    </View>
  )
}

export default ForYouList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding:10,
      },
})