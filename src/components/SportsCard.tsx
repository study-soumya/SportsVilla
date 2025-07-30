import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MAIN_GRADIENT_COLORS, MAIN_GRADIENT_START, MAIN_GRADIENT_END } from '../constants/gradient';

const sports = [
  { name: 'Badminton', logo: require('../../assets/sports/badminton.png') },
  { name: 'Cricket', logo: require('../../assets/sports/cricket.png') },
  { name: 'Tennis', logo: require('../../assets/sports/tennis.png') },
  { name: 'Football', logo: require('../../assets/sports/football.png') },
  { name: 'Pickleball', logo: require('../../assets/sports/pickleball.png') },
];

const SportsCard = ({ onCardPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Sports</Text>
      <FlatList
        data={sports}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.itemWrapper}
            onPress={() => onCardPress?.(item)}
          >
            <LinearGradient
              colors={MAIN_GRADIENT_COLORS}
              start={MAIN_GRADIENT_START}
              end={MAIN_GRADIENT_END}
              style={styles.card}
            >
              <Image source={item.logo} style={styles.icon} />
            </LinearGradient>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 12,
    color: '#000',
  },
  itemWrapper: {
    alignItems: 'center',
    marginRight: 18,
    borderRadius: 16,
    // No shadow for a clean, flat look
  },
  card: {
    borderRadius: 16,
    padding: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#d1001c',
    textAlign: 'center',
  },
});

export default SportsCard;