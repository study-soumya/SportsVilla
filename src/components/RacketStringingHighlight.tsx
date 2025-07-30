import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MAIN_GRADIENT_COLORS, MAIN_GRADIENT_START, MAIN_GRADIENT_END } from '../constants/gradient';

const RacketStringingHighlight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book for Racquet Stringing</Text>
      <Text style={styles.description}>Quick and professional stringing service at your doorstep.</Text>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={MAIN_GRADIENT_COLORS}
          start={MAIN_GRADIENT_START}
          end={MAIN_GRADIENT_END}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#d1001c',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#444',
    marginBottom: 15,
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default RacketStringingHighlight;