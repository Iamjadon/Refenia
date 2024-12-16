import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginPage from './app/LoginPage'; // Adjust paths based on your project structure
import OtpPage from './app/OtpPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Otp" component={OtpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
