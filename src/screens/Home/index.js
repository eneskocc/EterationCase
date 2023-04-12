import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import Header from '../../components/Header'
import * as $ from '../../redux/actions';
import { connect } from 'react-redux';


const Home = (props) => {
    const [searchText, setSearchText] = useState('')
    const [data, setData] = useState(props.DATA)
    useEffect(() => {
        props.getData()
        
    }, [])

    useEffect(() => {
        search(searchText)
    }, [searchText])

    useEffect(() => {
        search("")
    }, [props.DATA])

    const listItems = data.length > 0 && data.map((item, index) =>
        <Card key={index} navigation={props.navigation} item={item} addCart={() => props.addCart(item)} addFavorite={() => props.addFavorite(item)} />
    );

    const search = (searchTxt) => {
        if (searchText == '') {
            setData(props.DATA)
        } else {

            setData(props.DATA.filter((str) => {
                const upperStr = str.name.toUpperCase()
                return upperStr.includes(searchTxt.toUpperCase());
            }))
        }

    }
    return (
        <>
            <Header />
            <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#ffffff' }}>
                <SearchBar setSearchText={setSearchText} searchText={searchText} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                    onPress={()=>{
                        setData(data.sort((a, b) => {return a.price - b.price}))
                    }}
                        style={{
                            marginHorizontal:10,
                            padding: 10,
                            backgroundColor: '#fafafa',
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.36,
                            shadowRadius: 6.68,
                            elevation: 11,
                        }}>
                        <Text>Small to Large</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>data.reseve(
                        (p1, p2) => 
                        (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)}
                        style={{
                            marginHorizontal:10,
                            padding: 10,
                            backgroundColor: '#fafafa',
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.36,
                            shadowRadius: 6.68,

                            elevation: 11,
                        }}>

                        <Text>Large to Small</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {listItems}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const mapStateToProps = (state, props) => {
    const {
        DATA,
        GET_DATA_REQUEST_STATUS,
        DATA_ID,
        FAVORITE,
        ADD_CART,
        ADD_FAVORITE,
        CART,
        GET_DATA_ID_REQUEST_STATUS,
        GET_DATA_ID_REQUEST_ERROR,
        LOADING
    } = state.default;
    return {
        DATA,
        GET_DATA_REQUEST_STATUS,
        DATA_ID,
        FAVORITE,
        ADD_CART,
        ADD_FAVORITE,
        CART,
        GET_DATA_ID_REQUEST_STATUS,
        GET_DATA_ID_REQUEST_ERROR,
        LOADING
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    getData: () => {
        dispatch({
            type: $.GET_DATA,
        });
    },
    getDataId: id => {
        dispatch({
            type: $.GET_DATA_ID,
            id,
        });
    },
    addCart: (item) => {
        dispatch({
            type: $.ADD_CART,
            item,
        });
    },
    addFavorite: (item) => {
        dispatch({
            type: $.ADD_FAVORITE,
            item,
        });
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({})