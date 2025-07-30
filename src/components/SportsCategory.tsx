import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from './Navbar';
import Footer from './Footer';
import { MAIN_GRADIENT_COLORS, MAIN_GRADIENT_START, MAIN_GRADIENT_END } from '../constants/gradient';
import AnimatedGradientButton from './AnimatedGradientButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const brands = [
  { name: 'Yonex', logo: require('../../assets/brands/yonex.png') },
  { name: 'Lining', logo: require('../../assets/brands/lining.png') },
  { name: 'Victor', logo: require('../../assets/brands/victor.png') },
  { name: 'Yuong', logo: require('../../assets/brands/young.png') },
  { name: 'Apecs', logo: require('../../assets/brands/apacs.png') },
  { name: 'Hundred', logo: require('../../assets/brands/hundred.png') },
];

const categories = [
  'Racquets',
  'Shuttles',
  'Shoes',
  'Kit Bags',
  'Jerseys',
  'Pants',
  'Grips',
];

const allProducts = [
  {
    id: 1,
    name: 'Yonex Astrox 100zz Pro',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.8,
    buyers: 120,
    brand: 'Yonex',
    category: 'Racquets',
    price: 18999,
  },
  {
    id: 2,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 3,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 4,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 5,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 6,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 7,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 8,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 9,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
  {
    id: 10,
    name: 'Lining Turbo X',
    image: require('../../assets/products/astrox100zz.png'),
    rating: 4.6,
    buyers: 80,
    brand: 'Lining',
    category: 'Racquets',
    price: 9999,
  },
];

const PAGE_SIZE = 6;
const CARD_WIDTH = (width - 15 * 2 - 18) / 2;

const SportsCategory = ({ route }) => {
  const { sport } = route?.params || { sport: 'Badminton' };
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [visibleProducts, setVisibleProducts] = useState(PAGE_SIZE);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }
    return filtered;
  }, [selectedCategories, selectedBrands]);

  const productsToShow = filteredProducts.slice(0, visibleProducts);

  const handleQuantityChange = (productId, delta) => {
    setQuantities(q => ({
      ...q,
      [productId]: Math.max(1, (q[productId] || 1) + delta),
    }));
  };

  const handleLoadMore = useCallback(() => {
    if (visibleProducts < filteredProducts.length) {
      setVisibleProducts(v => Math.min(filteredProducts.length, v + PAGE_SIZE));
    }
  }, [visibleProducts, filteredProducts.length]);

  // Category selection
  const toggleCategory = cat => {
    setVisibleProducts(PAGE_SIZE);
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  // Brand selection
  const toggleBrand = brand => {
    setVisibleProducts(PAGE_SIZE);
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setVisibleProducts(PAGE_SIZE);
  };

  // Brand Card
  const renderBrand = ({ item }) => {
    const selected = selectedBrands.includes(item.name);
    return (
      <AnimatedGradientButton
        key={item.name}
        selected={selected}
        onPress={() => toggleBrand(item.name)}
        style={styles.brandCard}
        textStyle={[styles.brandName, selected && { color: MAIN_GRADIENT_COLORS[0] }]}
        icon={
          <Image
            source={item.logo}
            style={[
              styles.brandLogo,
              { tintColor: selected ? MAIN_GRADIENT_COLORS[0] : '#fff' },
            ]}
          />
        }
      >
        {item.name}
      </AnimatedGradientButton>
    );
  };

  // Category Card (card style button)
  const renderCategoryButton = cat => {
    const selected = selectedCategories.includes(cat);
    return (
      <TouchableOpacity
        key={cat}
        style={[
          styles.categoryCard,
          selected
            ? { backgroundColor: MAIN_GRADIENT_COLORS[0] }
            : { backgroundColor: '#fff', borderWidth: 1, borderColor: MAIN_GRADIENT_COLORS[0] },
        ]}
        onPress={() => toggleCategory(cat)}
        activeOpacity={0.85}
      >
        <Text
          style={[
            styles.categoryCardText,
            selected
              ? { color: '#fff' }
              : { color: MAIN_GRADIENT_COLORS[0] },
          ]}
        >
          {cat}
        </Text>
      </TouchableOpacity>
    );
  };

  // Product Card
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.divider} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.ratingRow}>
        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        <Text style={styles.buyersText}>| {item.buyers} bought</Text>
      </View>
      <View style={styles.quantityRow}>
        <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)} style={styles.qtyBtn}>
          <Text style={styles.qtyBtnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtyText}>{quantities[item.id] || 1}</Text>
        <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)} style={styles.qtyBtn}>
          <Text style={styles.qtyBtnText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.priceText}>₹{item.price}</Text>
      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartBtnText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyBtn}>
        <LinearGradient
          colors={MAIN_GRADIENT_COLORS}
          start={MAIN_GRADIENT_START}
          end={MAIN_GRADIENT_END}
          style={styles.buyBtnGradient}
        >
          <Text style={styles.buyBtnText}>Buy Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  // Header for FlatList (categories, brands, reset)
  const ListHeaderComponent = (
    <View style={styles.innerContainer}>
        <Text style={styles.header}>{sport} Brands</Text>
        <FlatList
            data={brands}
            keyExtractor={item => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 18 }}
            renderItem={renderBrand}
      />
      <View style={styles.filterRow}>
        <View style={styles.filtersLabelRow}>
          <MaterialIcons name="tune" size={20} color={MAIN_GRADIENT_COLORS[0]} style={{ marginRight: 6 }} />
          <Text style={styles.filtersLabel}>Filters</Text>
        </View>
        <FlatList
          data={categories}
          keyExtractor={item => item}
          renderItem={({ item }) => renderCategoryButton(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryBtnRow}
        />
        <TouchableOpacity style={styles.resetBtn} onPress={resetFilters}>
          <Text style={styles.resetBtnText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Products</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fafbfc' }}>
      <Navbar />
      <FlatList
        data={productsToShow}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.productRow}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#888', marginTop: 30 }}>
            No products found.
          </Text>
        }
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#d1001c',
    marginBottom: 12,
  },
  subHeader: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  filtersLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  filtersLabel: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
    marginBottom: 0,
    alignSelf: 'center',
  },
  // Category Filter Buttons
  categoryCard: {
    alignItems: 'center',
    marginRight: 12,
    minWidth: 80,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: MAIN_GRADIENT_COLORS[0],
    marginBottom: 4,
  },
  categoryCardText: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  categoryBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 2,
  },
  resetBtn: {
    marginLeft: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: MAIN_GRADIENT_COLORS[0],
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
  },
  resetBtnText: {
    color: MAIN_GRADIENT_COLORS[0],
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  // Brand Cards
  brandCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  brandCardSelected: {
    opacity: 1,
  },
  brandLogo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#fff',
    marginRight: 6,
  },
  brandName: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#d1001c',
    textAlign: 'center',
  },
  // Product Cards
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingHorizontal: 15,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    width: CARD_WIDTH,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  productImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  productName: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 6,
  },
  ratingText: {
    fontSize: 13,
    color: '#f7b500',
    fontFamily: 'Poppins-Medium',
  },
  buyersText: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 16,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: {
    fontSize: 18,
    color: '#d1001c',
    fontFamily: 'Poppins-Bold',
  },
  qtyText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 10,
    color: '#222',
  },
  priceText: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#d1001c',
    marginBottom: 10,
  },
  cartBtn: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 8,
    elevation: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  cartBtnText: {
    color: '#d1001c',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },
  buyBtn: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  buyBtnGradient: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyBtnText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },
});

export default SportsCategory;