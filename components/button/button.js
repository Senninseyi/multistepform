import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';

export const Buttons = ({ children, onPress, disabled }) => {
  return (
    <View
      style={{
        width: '40%',
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 10,
      }}>
      <Pressable onPress={onPress} disabled={disabled}>
        <Text style={{ textAlign: 'center', color: 'white' }}>{children}</Text>
      </Pressable>
    </View>
  );
};
