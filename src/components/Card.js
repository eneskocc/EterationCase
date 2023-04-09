import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
const Card = () => {
    return (
        <View style={styles.cardSahdow}>
            <View style={styles.card}>
                <Ionicons
                    name="star"
                    color={"gray"}
                    style={{ position: 'relative', left: '85%', top: 25, zIndex: 12 }}
                    size={20}
                />
                <Image
                    style={{ width: '100%', height: 150, }}
                    source={{ uri: 'http://placeimg.com/640/480/sports' }}
                />
                <View>
                    <Text style={{ fontSize: 14, color: '#2A59FE', paddingVertical: 3 }}>15.000 ₺</Text>
                    <Text style={{ fontSize: 14, color: '#000000', paddingVertical: 3 }}>iPhone 13 Pro Max 256Gb</Text>
                </View>

            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 10,
        padding: 10,

        marginVertical: 5

    },
    cardSahdow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        width: '48%',
    }
})