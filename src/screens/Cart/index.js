import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import Header from '../../components/Header'
import * as $ from '../../redux/actions';
import { connect } from 'react-redux';


const Cart = (props) => {

  const listItems = props.CART.length > 0 && props.CART.map((item, index) =>
    <View 
  key={index}
    style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <View>
        <View>
          <Text style={{ fontSize: 14, color: '#000000', paddingVertical: 3 }}>{item.name}</Text>
          <Text style={{ fontSize: 14, color: '#2A59FE', paddingVertical: 3 }}>{item.price}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', borderRadius: 10, marginVertical: 5 }}>
        <TouchableOpacity 
        onPress={()=>props.removeCart(item.id)}
        style={{ backgroundColor: '#d4d2d9', width: 40, alignItems: 'center', justifyContent: 'center', borderBottomStartRadius: 10, borderTopStartRadius: 10 }}>
          <Text style={{ fontSize: 24, color: '#2A59FE' }}>-</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: '#2A59FE', width: 60, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 24, color: '#ffffff' }}>{item.cartNumber}</Text></View>
        <TouchableOpacity 
         onPress={()=>props.addCart(item)}
        style={{ backgroundColor: '#d4d2d9', width: 40, alignItems: 'center', justifyContent: 'center', borderBottomEndRadius: 10, borderTopEndRadius: 10 }}>
          <Text style={{ fontSize: 24, color: '#2A59FE' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
  return (
    <>
      <Header />
      <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#ffffff',paddingTop:25 }}>
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
    ADD_CART,
    CART,
    REMOVE_CART,
    LOADING
  } = state.default;
  return {
    ADD_CART,
    CART,
    REMOVE_CART,
    LOADING
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addCart: (item) => {
    dispatch({
      type: $.ADD_CART,
      item,
    });
  },
  removeCart: (id) => {
    dispatch({
      type: $.REMOVE_CART,
      ID:id,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({})