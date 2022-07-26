import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForYouDataDetails from '../components/ForYouDataDetails'

const ProductDetailsScreen = ({route}) => {
  const id = route.params.id;

  return (
    <View>
    <ForYouDataDetails route={id}/>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})