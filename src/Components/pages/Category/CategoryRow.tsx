import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import ITypography from '@components/common/Typography';
import {useNavigation} from '@react-navigation/native';

type PropsType = {
  category: string;
  onRowPressed: () => void;
};
export default function CategoryRow({category, onRowPressed}: PropsType) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onRowPressed}>
      <ITypography style={styles.txt}>{category}</ITypography>
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
