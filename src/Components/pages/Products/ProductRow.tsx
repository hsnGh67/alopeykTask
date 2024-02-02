import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ITypography from '@components/common/Typography';
import {ProductType} from 'src/type';
import {moderateScale} from 'react-native-size-matters';

type PropsType = {
  product: ProductType;
  onProductPressed: (product: ProductType) => void;
};

export default function ProductRow({product, onProductPressed}: PropsType) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => onProductPressed(product)}>
      <ITypography style={styles.txt}>{product.name}</ITypography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(100),
    borderRadius: moderateScale(4),
    marginVertical: moderateScale(8),
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  txt: {
    textAlign: 'center',
  },
});
