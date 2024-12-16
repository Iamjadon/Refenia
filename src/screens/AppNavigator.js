import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Otp from '../screens/Otp';
import BillAmountPage from './BillAmountPage ';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Otp">
        <Stack.Screen 
          name="Otp" 
          component={Otp} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BillAmountPage" 
          component={BillAmountPage} 
          options={{ title: 'Enter Bill Amount' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
