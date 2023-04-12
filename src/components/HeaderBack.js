import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const HeaderBack = ({ title,navigation }) => {
    return (
        <SafeAreaView style={{ padding: 10, backgroundColor: '#2A59FE' }}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 5, backgroundColor: '#2A59FE', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons
                        name="arrow-back-outline"
                        color={"white"}
                        style={styles.icons}
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#ffffff', paddingVertical: 3, fontWeight: '800' }}>{title}</Text>
            </View>
        </SafeAreaView>
    )
}

export default HeaderBack

const styles = StyleSheet.create({})