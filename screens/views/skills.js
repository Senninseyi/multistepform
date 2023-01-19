import { View, Text, StyleSheet, TextInput } from "react-native";

export const Skills = ({ formData, setFormData }) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="softskills"
          placeholderTextColor="red"
          value={formData.softskills}
          onChangeText={(softskills) => {
            setFormData({ ...formData, softskills });
          }}
        />
      </View>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="hardskills"
          placeholderTextColor="red"
          value={formData.hardskills}
          onChangeText={(hardskills) => {
            setFormData({ ...formData, hardskills });
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
