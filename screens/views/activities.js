import { View, Text, StyleSheet, TextInput } from "react-native";

export const Activities = ({ formData, setFormData }) => {

  return (
    <View style={{ width: "100%" }}>
      <Text style={{ textAlign: "center", fontSize: 26, letterSpacing: 0.875 }}>
        Activities
      </Text>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="enter your company"
          placeholderTextColor="white"
          value={formData.company}
          onChangeText={(company) => {
            setFormData({ ...formData, company });
          }}
        />
      </View>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="enter your hobbies"
          placeholderTextColor="white"
          value={formData.hobbies}
          onChangeText={(hobbies) => {
            setFormData({ ...formData, hobbies });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formStyle: {
    backgroundColor: "red",
    borderRadius: 15,
    width: "100%",
    height: 45,
    justifyContent: "center",
    paddingStart: 20,
    marginVertical: 12,
    color: "white",
  },
  textInput: {
    color: "white",
  },
});
