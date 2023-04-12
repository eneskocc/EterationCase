import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const Card = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetail',{item:props.item})}
            style={styles.cardSahdow}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={{width:40,height:40, position: 'relative', left: '83%', top: 40, zIndex: 12 }}
                    onPress={props.addFavorite}>
                    <Ionicons
                        name="star"
                        color={props.item.isLike ? "yellow" : "gray"}
                        size={20}
                    />
                </TouchableOpacity>
                <Image
                    style={{ width: '100%', height: 150, }}
                    source={{ uri: props.item.image }}
                />
                <View>
                    <Text style={{ fontSize: 14, color: '#2A59FE', paddingVertical: 3 }}>{props.item?.price}</Text>
                    <Text style={{ fontSize: 14, color: '#000000', paddingVertical: 3 }}>{props.item.name}</Text>
                </View>
                <TouchableOpacity
                    onPress={props.addCart}
                    style={{ padding: 5, width: '100%', alignItems: 'center', borderRadius: 10, backgroundColor: '#2A59FE', marginVertical: 5 }}>
                    <Text style={{ fontSize: 14, color: '#ffffff', paddingVertical: 3 }}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 10,
        padding: 10,


    },
    cardSahdow: {
       

        elevation: 11,
        width: '48%',
    }
})