import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {
    const cardData = useSelector((state) => state.reducer)
    const [cardItem, setcardItem] = useState(0);
    
    useEffect(() => {
        setcardItem(cardData.length);
    }, [cardData]);
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'right', padding: 10, backgroundColor: 'orange' }}>{cardItem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})
export default Header;