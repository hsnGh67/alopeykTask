import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from '@components/pages/Category/CategoryScreen';
import ProductsScreen from '@components/pages/Products/ProductsScreen';

const Stack = createNativeStackNavigator();

export default function PurchasStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Categoriy" component={CategoryScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  );
}
