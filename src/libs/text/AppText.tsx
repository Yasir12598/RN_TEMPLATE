import { fontSize } from '@libs/styles/fonts';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { AppTextType } from './types';

function AppText(props: AppTextType) {
  const { colors } = useTheme();

  return (
    <Text
      onPress={props.onPress}
      style={[
        {
          fontSize: fontSize.caption,
          color: colors.textDarkColor,
        },
        props.style,
      ]}
      {...props}
    >
      {props.children}
    </Text>
  );
}

export default AppText;
