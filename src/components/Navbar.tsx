import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Location icon
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Notification icon
import Feather from 'react-native-vector-icons/Feather'; // Logout icon
import LinearGradient from 'react-native-linear-gradient'; // Correct import for CLI
import { MAIN_GRADIENT_COLORS, MAIN_GRADIENT_START, MAIN_GRADIENT_END } from '../constants/gradient';

const NavBar = () => {
  return (
    <LinearGradient 
        colors={MAIN_GRADIENT_COLORS}
        start={MAIN_GRADIENT_START}
        end={MAIN_GRADIENT_END}
        style={styles.navbarContainer}
      >
      <View style={styles.contentRow}>
        {/* Brand Name */}
        <Text style={styles.logoText}>SPORTSVILLA</Text>

        {/* Icons and Profile */}
        <View style={styles.iconRow}>
          <Icon name="location-outline" size={22} color="#fff" style={styles.icon} />
          <MaterialIcons name="notifications-none" size={22} color="#fff" style={styles.icon} />
          <Feather name="log-out" size={22} color="#fff" style={styles.icon} />
          <Image
            source={require('../../assets/profile/user-profile.jpg')}
            style={styles.profileIcon}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navbarContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Center items vertically inside navbar
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Poppins-ExtraBold', // Use your premium font if installed
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
