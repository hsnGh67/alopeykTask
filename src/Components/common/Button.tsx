import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
type PropsType = {
  children: React.ReactNode;
  disabled?: boolean;
  onPress: () => void;
};
export default function Button({
  children,
  disabled = false,
  onPress,
}: PropsType) {
  const onBtnPressed = () => {
    if (disabled) return;
    onPress();
  };
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: disabled ? '#B4BFC8' : '#0099FF',
      }}
      onPress={onBtnPressed}>
      <Text style={{...styles.txt, color: disabled ? '#5a5a5a' : '#fff'}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: moderateScale(16),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: moderateScale(16),
    fontFamily: 'Inter',
  },
});
