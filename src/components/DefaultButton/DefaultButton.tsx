import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  onPress: () => void;
  title: String;
  text?: number;
}

const DefaultButton = ({ additionalStyle, color, onPress, title, text }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, additionalStyle, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={{ fontSize: text }}>{title}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  color: colors.mainOrange,
  TextSize: 14,
};

export default DefaultButton;
