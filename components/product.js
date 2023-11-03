import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "./services/action";

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const handleAddtoCart = () => {
        
        dispatch(addToCart(item));
    }
    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 5 }}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
            <Button title="Add to Cart" onPress={handleAddtoCart} />
        </View>
    );
}
const styles = StyleSheet.create({

})
export default Product;