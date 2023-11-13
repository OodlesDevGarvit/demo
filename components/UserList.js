import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { getUserList } from "redux/action";

const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserList());
    });
    return (
        <View>
            <Text>UserList</Text>
        </View>
    );
}

export default UserList;