import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useReducer, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getData } from "../essential/components/Fetch";
import Styles from "../essential/components/Styles";
import CartItemsReducer from "../reducers/CartItemsReducers";

const Item = (props) => {
    const [addNew, setAddNew] = useState(false)
    // const [cartItems, dispatch] = useReducer(CartItemsReducer, [])
    const [cartItems, setCartItems] = useState([]);

    return (
        <View style={Styles.card}>

            <View style={[Styles.detailContainer, props.style]}>
                <Image source={{ uri: props.data.images.large }} style={Styles.cardImage} />
                <Text style={Styles.cardName}>{props.data.name}</Text>
                <Text style={Styles.rarityText}>{props.data.rarity}</Text>
                <View style={{ flexDirection: "row", }}>
                    <Text style={Styles.cardRowText}>${props.data.cardmarket.prices.trendPrice}</Text>
                    <Text style={Styles.cardRowText}>{props.data.set.total} left</Text>
                </View>
            </View>
            <TouchableOpacity style={[Styles.yellowBtn, { marginTop: -25, marginBottom: 20 }]} onPress={props.onPress} >
                <Text style={Styles.btnText}>Select</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Item;
