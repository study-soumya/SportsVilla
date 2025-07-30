import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  {
    image: require('../../assets/carousels/carousel1.jpg'),
    text: '50% OFF on Shoes',
  },
  {
    image: require('../../assets/carousels/carousel2.jpg'),
    text: 'Summer Sale on Jerseys',
  },
  {
    image: require('../../assets/carousels/carousel3.jpg'),
    text: 'Up to 70% OFF on Equipment',
  },
];

const DOT_SIZE = 8;

const ImageCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <ImageBackground source={item.image} style={styles.image} imageStyle={styles.imageStyle}>
        <View style={styles.overlay}>
          <Text style={styles.promoText}>{item.text}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Arrivals</Text>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <View style={styles.dotsContainer}>
        {images.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={[styles.dot, { opacity: dotOpacity }]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
    color: '#000',
    paddingHorizontal: 15,
  },
  card: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.92,
    height: 160,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
  },
  promoText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#d1001c',
    marginHorizontal: 5,
  },
});

export default ImageCarousel;
