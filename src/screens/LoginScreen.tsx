import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';   // Google
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Facebook & Twitter

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        {/* Logo text at top-left */}
        <Text style={styles.logoText}>CROSSXXULU</Text>

        <View style={styles.centerWrapper}>
          {/* Title */}
          <Text style={styles.title}>Welcome Back!</Text>

          {/* Box container */}
          <View style={styles.boxContainer}>
            <CustomInput placeholder="Email" keyboardType="email-address" />
            <CustomInput placeholder="Password" secureTextEntry />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Social Login Options */}
          <View style={styles.socialContainer}>
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.socialText}>Or login with</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.iconBox}>
                <AntDesign name="google" size={25} color="#DB4437" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <FontAwesome name="facebook" size={25} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <FontAwesome name="twitter" size={25} color="#1DA1F2" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#8B0000',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#8B0000',
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  boxContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  switchText: {
    color: '#8B0000',
    marginTop: 20,
    textAlign: 'center',
  },
  socialContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 35,
  },
  iconBox: {
    backgroundColor: '#fff',
    width: 70,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  dividerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#cbcbcbff',
  },
  socialText: {
    marginHorizontal: 20,
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },

});

export default LoginScreen;
