import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';

interface AppTextType extends TextStyle {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

interface EmptyMessageType {
  message?: string;
}

interface ErrorMessageType {
  message?: string;
}

interface LabelType {
  label: string;
  style?: StyleProp<TextStyle>;
}

export type { AppTextType, EmptyMessageType, ErrorMessageType, LabelType };
