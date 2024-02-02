import {Text, TextStyle, TextProps, ColorValue, ScaledSize} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

interface props extends TextProps {
  children?: any;
  style?: TextStyle;
}

const ITypography = (props: props) => {
  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[
        {
          color: props?.style?.color || 'black',
          fontSize: props?.style?.fontSize || moderateScale(14),
          fontFamily: props?.style?.fontWeight || 'Inter-Regular',
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default ITypography;
