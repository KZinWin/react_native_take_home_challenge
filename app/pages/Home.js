import { useEffect, useReducer, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { getData } from "../essential/components/Fetch";
import Styles from "../essential/components/Styles";
import Item from "./Items";
import SelectDropdown from 'react-native-select-dropdown'
import { black, yellow } from "../essential/components/Common";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
    const [cards, setCards] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const [sets, setSetType] = useState([]);
    const [types, setTypes] = useState([]);
    const [rarities, setRarities] = useState([]);
    const [selectedList, PutSelectedList] = useState([])


    useEffect(() => {
        if (nextPage == 1) {
            const ApiCall = async () => {
                getData('https://api.pokemontcg.io/v2/cards?pageSize=12&page=1')
                    .then((pokemons) => {
                        const data = pokemons.data;
                        setCards(data),
                            setNextPage(pokemons.page + 1)
                    });

                // getData('https://api.pokemontcg.io/v2/sets')
                //     .then(set => {
                //         setSetType(set.data)
                //     })
                // getData('https://api.pokemontcg.io/v2/types')
                //     .then(types => {
                //         setTypes(types.data)
                //     })
                // getData('https://api.pokemontcg.io/v2/rarities')
                //     .then(rarities => {
                //         setRarities(rarities.data)
                //     })
            }
            ApiCall();
        }
    })


    const showMore = async () => {
        await getData(`https://api.pokemontcg.io/v2/cards?pageSize=12&page=${nextPage}`)
            .then(async (pokemons) => {
                await setCards(cards => cards.concat(pokemons.data))
                setNextPage(pokemons.page + 1)
            });
    }

    const addToCart = async (newItem) => {
        await PutSelectedList(selectedList => [...selectedList, newItem])
        console.log(selectedList,'gg')
        await AsyncStorage.setItem('cartList', JSON.stringify(selectedList))
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ height: 30, flexDirection: "row-reverse", marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('CartModal')} >
                    <Icon name="opencart" size={22} color='grey' style={{ marginHorizontal: 30 }} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={Styles.filterContainer} >
                    <TextInput style={Styles.filterInput} placeholder='Name...' />
                    <View style={{ flexDirection: 'row' }}>
                        <SelectDropdown
                            data={types}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonStyle={[Styles.filterInput, { width: '30%', marginHorizontal: 5 }]}
                            buttonTextStyle={{ fontSize: 12, color: 'grey' }}
                            defaultButtonText='Types'

                        />

                        <SelectDropdown
                            data={rarities}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonStyle={[Styles.filterInput, { width: '30%', marginHorizontal: 5 }]}
                            buttonTextStyle={{ fontSize: 12, color: 'grey' }}
                            defaultButtonText='Rarity'

                        />

                        <SelectDropdown
                            data={sets}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonStyle={[Styles.filterInput, { width: '30%', marginHorizontal: 5 }]}
                            buttonTextStyle={{ fontSize: 12, color: 'grey' }}
                            defaultButtonText='Set'

                        />
                    </View>
                </View>
                {
                    cards.length > 0 ?
                        cards.map((card, i) => {
                            return (
                                    <Item
                                        key={i}
                                        id={card.id}
                                        navigation={navigation}
                                        data={card}
                                        onPress={() => addToCart(card, i)}
                                    // image={card.images?card.images.large : ''}
                                    // name={card.name?? card.name}
                                    // total={card.set?? card.set.total}
                                    // rarity={card.rarity}
                                    // trendPrice={card.cardmarket.prices.trendPrice ?? card.cardmarket}
                                    />

                            )
                        })
                        : <></>
                }
                <TouchableOpacity onPress={() => showMore()} style={{ alignSelf: 'center', marginBottom: 20, paddingBottom: 20 }}>
                    <Text style={{ fontSize: 20, color: black }}>Show More</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;