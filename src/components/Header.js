import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <SafeAreaView style={{padding:10,backgroundColor:'#2A59FE'}}>
            <View style={{paddingHorizontal:20,paddingVertical:5,backgroundColor:'#2A59FE'}}>
                <Text style={{ fontSize: 24, color: '#ffffff', paddingVertical: 3 ,fontWeight:'800'}}>E-Market</Text>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})