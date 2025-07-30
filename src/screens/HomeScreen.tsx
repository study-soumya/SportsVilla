import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ImageCarousel from '../components/ImageCarousel';
import SportsCard from '../components/SportsCard';
import RacketStringingHighlight from '../components/RacketStringingHighlight';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageCarousel />
        <SportsCard
          onCardPress={item =>
            navigation.navigate('SportsCategory', { sport: item.name })
          }
        />
        <RacketStringingHighlight />
        <ProductCard />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;