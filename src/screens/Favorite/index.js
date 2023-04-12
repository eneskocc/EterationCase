import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import Header from '../../components/Header'
import * as $ from '../../redux/actions';
import { connect } from 'react-redux';


const Favorite = (props) => {
    const listItems = props.FAVORITE.length > 0 && props.FAVORITE.map((item, index) =>
        item.isLike ? <Card key={index} navigation={props.navigation} item={item} addCart={() => props.addCart(item)} addFavorite={() => props.removeFavorite(item.id)}/> : null
    );
    return (
        <>
            <Header />
            <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#ffffff' }}>
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
        FAVORITE,
        ADD_CART,
        ADD_FAVORITE,
        REMOVE_FAVORITE
    } = state.default;
    return {
        FAVORITE,
        ADD_CART,
        ADD_FAVORITE,
        REMOVE_FAVORITE
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    addCart: (item) => {
        dispatch({
            type: $.ADD_CART,
            item,
        });
    },
    addFavorite: (id) => {
        dispatch({
            type: $.ADD_FAVORITE,
            ID: id,
        });
    },
    removeFavorite: (id) => {
        dispatch({
          type: $.REMOVE_FAVORITE,
          ID:id,
        });
      },
});
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);

const styles = StyleSheet.create({})