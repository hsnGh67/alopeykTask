import {View, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import ITypography from '@components/common/Typography';
import {OrderType, ProductType} from 'src/type';
import {moderateScale} from 'react-native-size-matters';

type PropsType = {
  order: OrderType;
};

function HistoryRow({order}: PropsType) {
  const date = new Date(order.registerDate);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ITypography style={styles.txt}>#{order.id}</ITypography>
        <ITypography style={styles.txt}>
          {date.toISOString().split('T')[0]}
        </ITypography>
      </View>
      <ITypography style={styles.txt}>{order.product.name}</ITypography>
      <ITypography style={styles.status}>{order.status}</ITypography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: moderateScale(4),
    marginVertical: moderateScale(8),
    elevation: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth: 0,
    padding: moderateScale(8),
    gap: 2,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    textAlign: 'center',
  },
  status: {
    color: '#0099FF',
  },
});

export default memo(HistoryRow, (oldProps, newProps) => {
  if (newProps.order.status !== oldProps.order.status) return false;
  return true;
});
