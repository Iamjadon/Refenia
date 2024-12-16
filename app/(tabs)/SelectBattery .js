import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { CheckBox, Picker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectBattery = () => {
  const router = useRouter(); 
  const [selectedBattery, setSelectedBattery] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDropdownChange = (itemValue) => {
    setSelectedBattery(itemValue);
  };

  const handleSubmit = () => {
    router.push('/next-page');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Battery</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Battery 1</Text>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Picker
          selectedValue={selectedBattery}
          style={styles.picker}
          onValueChange={handleDropdownChange}
        >
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
        </Picker>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Battery 2</Text>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Picker
          selectedValue={selectedBattery}
          style={styles.picker}
          onValueChange={handleDropdownChange}
        >
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
        </Picker>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Battery 3</Text>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Picker
          selectedValue={selectedBattery}
          style={styles.picker}
          onValueChange={handleDropdownChange}
        >
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    marginRight: 10,
    fontSize: 16,
  },
  picker: {
    width: 150,
    height: 50,
    marginLeft: 10,
  },
  submitButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SelectBattery;
