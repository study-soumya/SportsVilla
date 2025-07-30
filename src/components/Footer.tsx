import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="home-outline" size={22} color="#d1001c" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="search-outline" size={22} color="#aaa" />
        <Text style={styles.label}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="cart-outline" size={22} color="#aaa" />
        <Text style={styles.label}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="person-outline" size={22} color="#aaa" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  iconContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },
});

export default Footer;
