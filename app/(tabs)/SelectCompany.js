import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { CheckBox, FlatList, Modal, Picker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectCompany = () => {
  const router = useRouter();
  const [companies, setCompanies] = useState([
    { id: '1', name: 'Company A' },
    { id: '2', name: 'Company B' },
    { id: '3', name: 'Company C' },
    { id: '4', name: 'Company D' },
  ]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dropdownValues, setDropdownValues] = useState({});

  const handleCheckboxChange = (companyId) => {
    setSelectedCompanies((prevState) =>
      prevState.includes(companyId)
        ? prevState.filter((id) => id !== companyId)
        : [...prevState, companyId]
    );
  };

  const handleDropdownChange = (companyId, value) => {
    setDropdownValues((prevState) => ({
      ...prevState,
      [companyId]: value,
    }));
  };

  const handleContinue = () => {
    if (selectedCompanies.length === 0) {
      // Optionally, alert the user to select at least one company
      alert('Please select at least one company.');
    } else {
      setIsModalVisible(false); // Close the modal before navigation
      router.push('/select-battery'); // Use the correct route path
    }
  };

  const renderCompanyItem = ({ item }) => {
    return (
      <View style={styles.companyContainer}>
        <CheckBox
          value={selectedCompanies.includes(item.id)}
          onValueChange={() => handleCheckboxChange(item.id)}
        />
        <Text style={styles.companyText}>{item.name}</Text>
        <Picker
          selectedValue={dropdownValues[item.id] || ''}
          style={styles.picker}
          onValueChange={(value) => handleDropdownChange(item.id, value)}
        >
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
        </Picker>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openModalButton} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.buttonText}>Select Companies</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <FlatList
            data={companies}
            renderItem={renderCompanyItem}
            keyExtractor={(item) => item.id}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openModalButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyText: {
    marginLeft: 10,
    fontSize: 16,
  },
  picker: {
    width: 150,
    height: 50,
    marginLeft: 10,
  },
  submitButton: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default SelectCompany;
