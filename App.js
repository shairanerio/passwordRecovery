import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function PasswordRecovery({ navigation }) {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = () => {
    console.log(`Password recovery initiated for email: ${email}`);
    navigation.navigate('EnterOTP', { email });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerSection}>
        <Text style={styles.headerTitle}>Password Recovery</Text>
      </View>

      <View style={styles.emailSection}>
        <Text style={styles.label}>Enter your email address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.recoverButton} onPress={handlePasswordRecovery}>
        <Text style={styles.recoverButtonText}>Recover Password</Text>
      </TouchableOpacity>
    </View>
  );
}

function EnterOTP({ route }) {
  const { email } = route.params;
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () => {
    console.log(`OTP entered: ${otp} for email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerSection}>
        <Text style={styles.headerTitle}>Enter OTP</Text>
      </View>

      <View style={styles.otpSection}>
        <Text style={styles.label}>Enter the OTP sent to {email}:</Text>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          keyboardType="number-pad"
          autoCapitalize="none"
          value={otp}
          onChangeText={setOtp}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleOtpSubmit}>
        <Text style={styles.submitButtonText}>Submit OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PasswordRecovery">
        <Stack.Screen 
          name="PasswordRecovery" 
          component={PasswordRecovery} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EnterOTP" 
          component={EnterOTP} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    alignItems: 'center',
    paddingTop: 250,
  },
  headerSection: {
    marginBottom: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  emailSection: {
    width: '85%',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'black',
    fontSize: 16,
  },
  recoverButton: {
    marginTop: 30,
    backgroundColor: '#AB644B',
    borderRadius: 10,
    paddingVertical: 15,
    width: '75%',
    alignItems: 'center',
  },
  recoverButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  otpSection: {
    width: '85%',
    marginTop: 20,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#AB644B',
    borderRadius: 10,
    paddingVertical: 15,
    width: '75%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
