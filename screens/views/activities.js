import { View, Text, StyleSheet, TextInput } from "react-native";

export const Activities = ({ formData, setFormData }) => {

  return (
    <View style={{ width: "100%" }}>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="enter your company"
          placeholderTextColor="red"
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
          placeholderTextColor="red"
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
    backgroundColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
    borderRadius: 8,
    width: "100%",
    height: 45,
    justifyContent: "center",
    paddingStart: 20,
    marginVertical: 12,
  },
  textInput: {
    color: "red",
  },
});
