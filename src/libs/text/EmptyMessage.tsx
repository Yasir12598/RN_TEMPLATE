import { View, Text } from 'react-native';
import React from 'react';
import { fontSize } from '@libs/styles/fonts';
import { useTheme } from '@react-navigation/native';
import AppText from './AppText';
import { heightPixel } from '@libs/styles/spaces';
import { useTranslation } from 'react-i18next';
import { EmptyMessageType } from './types';

export default function EmptyMessage(props: EmptyMessageType) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <AppText
      style={{
        fontSize: fontSize.body,
        fontWeight: '600',
        color: colors.placeholderColor,
        textAlign: 'center',
        marginVertical: heightPixel(10),
      }}
    >
      {props.message ?? t('No data found')}
    </AppText>
  );
}
