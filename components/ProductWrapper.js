/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView
} from "react-native";
import Header from "./header";
import Product from "./product";


const ProductWrapper = ({navigation}) => {

  const products = [
    {
      name: 'samsung mobile',
      color: 'white',
      price: 30000,
      image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636.png"
    },
    {
      name: 'Apple I phone',
      color: 'red',
      price: 100000,
      image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636.png"
    },
    {
      name: 'one plus mobile',
      color: 'white',
      price: 60000,
      image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636.png"
    }
  ]
  return (
    <View style={styles.container}>
      <Button title="Go to userlist" onPress={() => navigation.navigate("User")} />
      <Header />
      <ScrollView>
        {
          products.map((item) =>  <Product item={item} />)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ProductWrapper;