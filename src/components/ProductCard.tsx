import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MAIN_GRADIENT_COLORS, MAIN_GRADIENT_START, MAIN_GRADIENT_END } from '../constants/gradient';

const products = [
  { name: 'Yonex Racquet' },
  { name: 'Wilson Balls' },
  { name: 'Nike Shoes' },
  { name: 'Adidas T-Shirt' },
];

const ProductCard = ({ onCardPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.cardWrapper}
            onPress={() => onCardPress?.(item)}
          >
            <LinearGradient
              colors={MAIN_GRADIENT_COLORS}
              start={MAIN_GRADIENT_START}
              end={MAIN_GRADIENT_END}
              style={styles.card}
            >
              <Text style={styles.name}>{item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingVertical: 4 }}
      />
      {/* Add extra space below the cards */}
      <View style={{ height: 32 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 0,
    // Optional: Add a subtle background and border radius for the section
    // backgroundColor: '#fafbfc',
    // borderRadius: 18,
    // paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 12,
    color: '#000',
  },
  cardWrapper: {
    marginRight: 18,
    borderRadius: 18,
    alignItems: 'center',
    // No shadow for a clean, flat look
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: 120,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    // Optional: Add a slight scale effect on press for feedback
  },
  name: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0,0,0,0.10)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});

export default ProductCard;