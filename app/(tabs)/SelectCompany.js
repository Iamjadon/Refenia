import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import companyData from '../../src/json/CompanyDetails.json';

const SelectCompany = () => {
  const router = useRouter();

  // Handle the selection of a company
  const handleContinue = (company) => {
    if (!company) {
      alert('Please select a company.');
      return;
    }
    router.push('/SelectBattery');
  };

  // Render individual company card
  const CompanyCard = ({ item }) => (
    <View style={styles.companyCard}>
      <Text style={styles.companyName}>{item.CompanyName}</Text>
      <Text style={styles.gridDescription}>{item.GridDescription}</Text>
      <Text style={styles.amount}>${item.Amount.toLocaleString()}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleContinue(item)}
        accessible
        accessibilityLabel={`Select ${item.CompanyName}`}
        accessibilityHint="Navigate to the next screen"
      >
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    </View>
  );

  // Check for empty or invalid data
  if (!companyData?.CompaniesDetails?.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No company data available. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={companyData.CompaniesDetails}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()} 
        renderItem={({ item }) => <CompanyCard item={item} />}
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
  companyCard: {
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
  companyName: {
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

export default SelectCompany;
