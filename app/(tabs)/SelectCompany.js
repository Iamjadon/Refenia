import { Picker } from '@react-native-picker/picker'; // Import the correct Picker component
import { useRouter } from 'expo-router'; // for navigation
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectCompany = () => {
  const router = useRouter();

  const [companies] = useState([
    { id: '1', name: 'Company A' },
    { id: '2', name: 'Company B' },
    { id: '3', name: 'Company C' },
  ]);

  const [selectedCompany, setSelectedCompany] = useState('');
  // const [selectedOption, setSelectedOption] = useState('');

  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
  };

  // const handleDropdownChange = (value) => {
  //   setSelectedOption(value);
  // };

  const handleContinue = () => {
    if (!selectedCompany) {
      alert('Please select battery name.');
    } else {
      router.push('/SelectBattery');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Company</Text>
      <Picker
        selectedValue={selectedCompany}
        style={styles.picker}
        onValueChange={handleCompanyChange}
      >
        <Picker.Item label="Select a company" value="" />
        {companies.map((company) => (
          <Picker.Item key={company.id} label={company.name} value={company.id} />
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

export default SelectCompany;