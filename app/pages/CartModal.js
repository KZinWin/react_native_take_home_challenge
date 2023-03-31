import {
  Animated,
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { getData } from '../essential/components/Fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../essential/components/Styles';
import { black, blue, white } from '../essential/components/Common';

const styles = StyleSheet.create({
  viewAnimated: {
    width: '100%',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
  },
});

const CartModal = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([])
  const [listItems, setListItems] = useState([])
  const [initial, setInitial] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (initial) {
      const getcartItem = async () => {
        AsyncStorage.getItem('cartList')
        .then(result => {
          setListItems(result == null? [] : JSON.parse(result))
        })
        
      }
      getcartItem()
        setInitial(false);
    }

  })

  const incrementValue = () => {
    setCount(count + 1)
  }
  const decreaseValue = () => {
    setCount(count - 1)
  }

  const clearAll = async () => {
    await AsyncStorage.setItem('cartList', '')
    setDetailItmes([]);
    setCartItems([]);
    navigation.goBack
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={[
          {
            height: '70%',
          },
          styles.viewAnimated,
        ]}>
        <View style={styles.viewContainer}>
          <ScrollView>
            {
              listItems.length > 0 ?
                listItems.map((item, i) => {
                  return (
                    <View style={Styles.CartItemContainer} key={i}>
                      <Image source={{ uri: item.images.small }} style={Styles.CartDetailImage} />
                      <View style={{ flex: 1, flexDirection: 'column', padding: 10, justifyContent: 'center' }}>
                        <Text style={Styles.cardName}>{item.name}</Text>
                        <Text style={Styles.itemPrice}><Text style={{ color: black, fontWeight: 'bold' }}>${item.cardmarket.prices.trendPrice}</Text> per card </Text>
                        <Text style={Styles.itemTotal}><Text style={{ color: 'red', fontWeight: 'bold' }}>{item.set.total}</Text> cards left</Text>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <Text style={{ textAlign: 'center', fontSize: 25, color: blue, fontWeight: 'bold', paddingTop: 30, paddingRight: 10 }}>{count}</Text>
                          <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity onPress={() => incrementValue()}>
                              <Text style={{ fontSize: 20, color: blue, fontWeight: 'bold' }}>^</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => decreaseValue()}>
                              <Text style={{ fontSize: 20, color: blue, fontWeight: 'bold' }}>v</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 15 }}>price</Text>
                            <Text style={{ fontSize: 21, color: blue, fontWeight: 'bold' }}>${item.cardmarket.prices.trendPrice}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })
                : <></>
            }
          </ScrollView>
          <View style={{ backgroundColor: white, flexDirection: 'column' }}>
            <TouchableOpacity onPress={() => clearAll()} style={{ alignItems: 'center', padding: 10 }}>
              <Text style={{ color: 'grey', fontSize: 15, textDecorationLine: 'underline' }}>Clear all</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'column', paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'row', marginRight: 20}}>
                <Text style={{ flex:1,fontWeight: 'bold', fontSize: 20, textAlign: 'right' }}>Total cards</Text>
                <Text style={{ flex:1 ,fontWeight: 'bold', fontSize: 20, color: 'red', marginLeft: 30  }}>{count}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginRight: 20}}>
                <Text style={{ flex:1,fontWeight: 'bold', fontSize: 23, textAlign: 'right' }}>Total price</Text>
                <Text style={{ flex:1 ,fontWeight: 'bold', fontSize: 23, color: 'red', marginLeft: 30  }}>$19.97</Text>
              </View>
            </View>
          </View>
        </View>
      </Animated.View >
    </View >
  );
}
export default CartModal;