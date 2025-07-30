import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const SearchBar = () => {
  return (
    <View style={styles.outerContainer}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search..."
          style={styles.input}
          placeholderTextColor="#888"
        />
        <Icon
          name="search-outline"
          size={20}
          color={Colors.primaryGradientStart}
          style={styles.searchIcon}
        />
      </View>

      {/* Wishlist & Cart Icons */}
      <View style={styles.iconRow}>
        <Icon
          name="heart-outline"
          size={22}
          color={Colors.primaryGradientStart}
          style={styles.icon}
        />
        <Icon
          name="cart-outline"
          size={22}
          color={Colors.primaryGradientStart}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 14,
    height: 44,

    // Visible premium shadow (both Android & iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    paddingVertical: Platform.OS === 'ios' ? 10 : 6,
  },
  searchIcon: {
    marginLeft: 8,
  },
  iconRow: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    marginLeft: 12,
  },
});

export default SearchBar;
