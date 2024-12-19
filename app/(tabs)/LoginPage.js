import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (mobileNumber.length < 10) {
      Alert.alert("Invalid Number", "Please enter a valid 10-digit mobile number.");
    } else {
      router.push('/Otp'); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/solarLogin.jpg')} 
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay}></View> 
      </View>
      
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subheading}>Please enter your mobile number to login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your mobile number"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',  
    paddingTop: 40,  
  },
  imageContainer: {
    width: '100%',
    height: 300, 
    position: 'relative',
    overflow: 'hidden',
    // borderBottomLeftRadius: 50, 
    // borderBottomRightRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    // borderBottomLeftRadius: 50, 
    // borderBottomRightRadius: 50, 
  },
  // overlay: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  //   borderBottomLeftRadius: 50, 
  //   borderBottomRightRadius: 50, 
  // },
  heading: {
    fontSize: 28,
    fontWeight: '700',  
    marginTop: 20, 
    marginBottom: 10,
    color: '#343a40',
    marginTop:80
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6c757d', 
  },
  input: {
    width: '90%',
    height: 45,
    borderColor: '#ced4da',  
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 8,  
    fontSize: 16,
    backgroundColor: '#ffffff', 
    shadowColor: "#000",  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,  
  },
  button: {
    width: '90%',
    height: 45,
    backgroundColor: '#007bff', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, 
    padding: 10,
    shadowColor: "#000",  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff', 
    fontWeight: '700', 
  },
});

export default LoginPage;
