import React, { useState, useContext, createContext } from "react";

import {
  View,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import ProductDetail from "../screens/ProductDetail";
import Favorite from "../screens/Favorite";
import * as $ from '../redux/actions';
import {connect} from 'react-redux';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
    </HomeStack.Navigator>
  );
}

const BasketStack = createNativeStackNavigator();

function BasketStackScreen() {
  return (
    <BasketStack.Navigator>
      <BasketStack.Screen name="Basket" component={Cart} />
    </BasketStack.Navigator>
  );
}

const FavoriteStack = createNativeStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorite" component={Favorite} />
    </FavoriteStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Route=(props)=> {
  

  return (
 
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home-outline"
                color={"black"}
                style={styles.icons}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name=" "
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <View style={{
                position: 'relative',
                top: -5,
                zIndex: 12
              }}>
             
                <View style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: props.CART.length>0?'red':'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  right: -18,
                  top: 12,
                  zIndex: 12
                }}>
                  <Text style={styles.iconsAddText}>{props.CART.length}</Text>
                </View>
                 
                <Ionicons name="cart-outline" size={26} color="black" />

              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Favorite}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View style={{
                position: 'relative',
                top: -5,
                zIndex: 12
              }}>
             
                <View style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: props.FAVORITE.length>0?'red':'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  right: -18,
                  top: 12,
                  zIndex: 12
                }}>
                  <Text style={styles.iconsAddText}>{props.FAVORITE.length}</Text>
                </View>
                 
                <Ionicons name="star-outline" size={26} color="black" />

              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-outline"
                size={24}
                style={styles.icons}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
   
  );
}
const mapStateToProps = (state, props) => {
  const {
    CART,
    FAVORITE
  } = state.default;
  return {
    CART,
    FAVORITE
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Route);

const styles = StyleSheet.create({
  icons: {
    paddingTop: 10,
    zIndex: 10
  },
  iconsAddText: {
    color: "#ffffff",
    fontSize: 10
  },
});