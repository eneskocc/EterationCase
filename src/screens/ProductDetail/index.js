import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import { Ionicons } from "@expo/vector-icons";
import * as $ from '../../redux/actions';
import { connect } from 'react-redux';

const ProductDetail
  = (props) => {
    const item=props.route.params.item
    return (
      <>
        <HeaderBack title={'  '+item.name} navigation={props.navigation} />
        <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#ffffff', justifyContent: 'space-between' }}>
          <ScrollView>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => props.addFavorite(item.id)}>
                <Ionicons
                  name="star"
                  color={"gray"}
                  style={{ position: 'relative', left: '90%', top: 35, zIndex: 12 }}
                  size={25}
                />
              </TouchableOpacity>
              <Image
                style={{ width: '100%', height: 250, }}
                source={{ uri: item.image}}
              />

              <Text style={{ fontSize: 24, color: '#000000', paddingVertical: 3, fontWeight: '600' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#000000', paddingVertical: 3, fontWeight: '200', lineHeight: 16 }}>{item.description}</Text>

            </View>

          </ScrollView>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: '60%' }}>
              <Text style={{ fontSize: 20, color: '#2A59FE', fontWeight: '600' }}>Price : </Text>
              <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>{item.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => props.addCart(item)}
              style={{ padding: 5, width: '40%', alignItems: 'center', borderRadius: 10, backgroundColor: '#2A59FE', marginVertical: 5 }}>
              <Text style={{ fontSize: 14, color: '#ffffff', paddingVertical: 3 }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 50 }}></View>
        </View>
      </>
    )
  }

const mapStateToProps = (state, props) => {
  const {
    DATA,
    ADD_CART,
    ADD_FAVORITE,
  } = state.default;
  return {
    DATA,
    ADD_CART,
    ADD_FAVORITE,
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
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 10,
    padding: 10,

    marginVertical: 5

  },
})