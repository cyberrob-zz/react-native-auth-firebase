import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  placeholder, 
  value,
  onChangeText,
  autoCorrect,
  type,
  returnKeyType,
  secureTextEntry
}) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={inputStyle}
        autoCorrect={autoCorrect}
        keyboardType={type}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        numberOfLines={1}
      />
    </View>
  );
};

const styles = {
    containerStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 40,
      flex: 1
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    }
};

export { Input };
