import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const BillAmount = () => {
  const router = useRouter();
  const [billAmount, setBillAmount] = useState('');
  const [kwh, setKwh] = useState(null); // State to store calculated kWh
  const [isCalculated, setIsCalculated] = useState(false);

  const calculatePower = () => {
    if (billAmount === '' || isNaN(billAmount)) {
      Alert.alert('Please enter a valid amount');
    } else {
      const calculatedKwh = parseFloat(billAmount) / 100; // 100 units = 1 kWh
      setKwh(calculatedKwh.toFixed(2)); 
      setIsCalculated(true);
    }
  };

  const handleContinue = () => {
    router.push('./SelectCompany'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Electricity Bill Amount</Text>

      <TextInput
        style={styles.inputview}
        keyboardType="number-pad"
        value={billAmount}
        onChangeText={(text) => {
          setBillAmount(text);
          setIsCalculated(false); // Reset calculated state on new input
        }}
        placeholder="Enter amount"
        maxLength={10}
      />

      <TouchableOpacity
        style={[styles.calculateBtn, { backgroundColor: billAmount ? 'blue' : '#949494' }]}
        onPress={calculatePower}
        disabled={!billAmount}
      >
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>

      {isCalculated && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Calculated Power: {kwh} kWh</Text>

          <TouchableOpacity
            style={styles.continueBtn}
            onPress={handleContinue}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default BillAmount;

const styles = StyleSheet.create({
  body:{
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 90,
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
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  continueBtn: {
    width: '100%',
    height: 55,
    backgroundColor: 'green',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
