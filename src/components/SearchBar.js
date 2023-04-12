import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const SearchBar = (props) => {

    return (
        <View style={{ width: '100%', borderRadius: 10, backgroundColor: '#fafafa', padding: 10, marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
                name="search-outline"
                color={"black"}
                style={styles.icons}
                size={24}
            />
              <TextInput
        style={styles.input}
        onChangeText={props.setSearchText}
        value={props.searchText}
        placeholder="Search"
        keyboardType="numeric"
      />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    input: {
        width:'90%',
        height:'100%',
        marginHorizontal:10
      },
})