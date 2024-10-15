import { fontSize } from '@libs/styles/fonts';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import AppText from './AppText';
import { ErrorMessageType } from './types';

export default function ErrorMessage(props: ErrorMessageType) {
  const { colors } = useTheme();

  if (props.message)
    return (
      <AppText
        style={{
          fontSize: fontSize.small,
          color: colors.dangerColor,
        }}
      >
        {props.message}
      </AppText>
    );
}
