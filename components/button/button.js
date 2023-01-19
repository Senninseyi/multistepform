import React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export const Buttons = ({ children, onPress, disabled }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "red",
          borderRadius: 10,
        }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
