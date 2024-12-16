import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const BillAmount = () => {
    const router = useRouter();
  const [billAmount, setBillAmount] = useState('');

  const calculateBill = () => {
    if (billAmount === '' || isNaN(billAmount)) {
      Alert.alert('Please enter a valid amount');
   

    } else {
      const totalAmount = parseFloat(billAmount) * 1.1; 
      Alert.alert(`Your total bill with tax: $${totalAmount.toFixed(2)}`);
      router.push('./SelectCompany');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Electricity Bill Amount</Text>

      <TextInput
        style={styles.inputview}
        keyboardType="number-pad"
        value={billAmount}
        onChangeText={(text) => setBillAmount(text)}
        placeholder="Enter amount"
        maxLength={10}
      />

      <TouchableOpacity
        style={[styles.calculateBtn, { backgroundColor: billAmount ? 'blue' : '#949494' }]}
        onPress={calculateBill}
        disabled={!billAmount}
      >
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BillAmount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputview: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  calculateBtn: {
    width: '100%',
    height: 55,
    backgroundColor: '#949494',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});
