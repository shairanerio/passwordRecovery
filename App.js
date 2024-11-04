import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';

const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = () => {
    console.log('Recover Password pressed');
  };

  const handleUsePhoneNumber = () => {
    console.log('Use Phone Number Instead pressed');
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.recTitle}>Password Recovery</Text>
        <TextInput label="Enter Email Address" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none"/>

        <Button mode="contained" onPress={handleRecoverPassword} style={styles.recButton}>Recover Password</Button>
        
        <TouchableOpacity style={styles.pnButton} onPress={handleUsePhoneNumber}>
          <Text style={styles.pnButtonText}>Use Phone Number Instead</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    padding: 16,
  },
  recTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 200,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  recButton: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#AB644B',
    textColor: "#fff",
  },
  pnButton: {
    alignItems: 'center',
    marginTop: 30,
  },
  pnButtonText: {
    color: '#696969',
    textDecorationLine: 'underline',
  }
});

export default PasswordRecoveryScreen;