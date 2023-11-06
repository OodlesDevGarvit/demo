import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./services/action";

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddtoCart = () => {
        dispatch(addToCart(item));
    }
    const handleRemovefromCart = () => {
        dispatch(removeFromCart(item.name));
    }
    
    useEffect(() => {
       let result = cartItems.filter((element)=>{
        return element.name === item.name
       });
       if(result.length){
        setIsAdded(true);
       }
       else{
        setIsAdded(false);
       }
    },[cartItems])
    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 5 }}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
            {
                isAdded ?
                    <Button title="Remove to Cart" onPress={handleRemovefromCart} />
                    :
                    <Button title="Add to Cart" onPress={handleAddtoCart} />
            }

        </View>
    );
}
const styles = StyleSheet.create({

})
export default Product;