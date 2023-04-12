
import * as React from 'react';
import {Image, View} from 'react-native';


import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './src/screens/ProductDetail';
import Route from './src/Route';

export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Route} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  );
}