import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import ITypography from '@components/common/Typography';
import {ProductType} from 'src/type';
import {moderateScale} from 'react-native-size-matters';
import Button from '@components/common/Button';

type PropsType = {
  product: ProductType;
  onProductPressed: (product: ProductType) => void;
};

function ProductRow({product, onProductPressed}: PropsType) {
  return (
    <View style={styles.container}>
      <ITypography style={styles.txt}>{product.name}</ITypography>
      <Button style={styles.btn} onPress={() => onProductPressed(product)}>
        Buy
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(100),
    borderRadius: moderateScale(4),
    marginVertical: moderateScale(8),
    padding: moderateScale(8),
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  btn: {
    width: '80%',
  },
  txt: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: moderateScale(16),
    marginBottom: moderateScale(16),
  },
});

export default memo(ProductRow);
