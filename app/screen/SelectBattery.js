import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BatteryData from '../../src/json/BatteryDetails.json';

const SelectBattery = () => {
  const router = useRouter();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(BatteryData.BatteryDetails);
  }, []);

  const handleContinue = (Battery) => {
    if (!Battery) {
      alert('Please select a Battery.');
    } else {
      router.push('/SelectBattery');
    }
  };

  const renderBatteryItem = ({ item }) => (
    <View style={styles.BatteryCard}>
      <Text style={styles.BatteryName}>{item.BatteryImage}</Text>
      <Text style={styles.gridDescription}>{item.BatteryDescription}</Text>
      <Text style={styles.amount}>${item.Amount.toLocaleString()}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleContinue(item)}
      >
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Select Battery</Text> */}
      <FlatList
        data={companies}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()} 
        renderItem={renderBatteryItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', 
    marginTop:30
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    flexGrow: 1,
    width: '100%',
  },
  BatteryCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderLeftWidth: 8,
    borderLeftColor: '#007BFF',
  },
  BatteryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF', 
    marginBottom: 8,
  },
  gridDescription: {
    fontSize: 14,
    color: '#666', 
    marginVertical: 8,
    lineHeight: 20,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectBattery;
