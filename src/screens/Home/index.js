import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'

const Home = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 16,backgroundColor:'#ffffff' }}>
            <SearchBar />
            <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap',justifyContent:'space-between' }}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})