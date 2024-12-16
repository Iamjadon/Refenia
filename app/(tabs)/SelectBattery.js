import { Picker } from '@react-native-picker/picker'; // Import the correct Picker component
import { useRouter } from 'expo-router'; // for navigation
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectBattery = () => {
  const router = useRouter();

  const [companies] = useState([
    { id: '1', name: 'Battery A' },
    { id: '2', name: 'Battery B' },
    { id: '3', name: 'Battery C' },
  ]);

  const [selectedBattery, setSelectedBattery] = useState('');
  // const [selectedOption, setSelectedOption] = useState('');

  const handleBatteryChange = (value) => {
    setSelectedBattery(value);
  };

  // const handleDropdownChange = (value) => {
  //   setSelectedOption(value);
  // };

  const handleContinue = () => {
    if (!selectedBattery ) {
      alert('Please select Battery name.');
    } else {
      router.push('./index.js');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Battery</Text>

      <Picker
        selectedValue={selectedBattery}
        style={styles.picker}
        onValueChange={handleBatteryChange}
      >
        <Picker.Item label="Select a Battery" value="" />
        {companies.map((Battery) => (
          <Picker.Item key={Battery.id} label={Battery.name} value={Battery.id} />
        ))}
      </Picker>

     
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SelectBattery;
