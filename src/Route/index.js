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



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="FeeHomed" component={Home} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Cart} />
    </SettingsStack.Navigator>
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

function  FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorite" component={ProductDetail} />
    </FavoriteStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function Route() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
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
            component={BasketStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <View style={{position:'relative',
                top:-5,
                zIndex:12}}>
                    <View style={{
                        width:20,
                        height:20,
                        borderRadius:10,
                        backgroundColor:'red',
                        alignItems:'center',
                        justifyContent:'center',
                        position:'relative',
                        right:-18,
                        top:12,
                        zIndex:12
                        }}>
                <Text style={styles.iconsAddText}>14</Text>
                </View>
                  <Ionicons name="cart-outline" size={26} color="black" />
                  
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={BasketStackScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="star-outline"
                  size={24}
                  style={styles.icons}
                  color="black"
                />
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
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icons: {
      paddingTop:10,
      zIndex:10
  },
  iconsAddText: {
    color: "#ffffff",
    fontSize:10
  },
});