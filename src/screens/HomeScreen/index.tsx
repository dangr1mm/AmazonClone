import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
      />

    </View>
  );
};

export default HomeScreen;
