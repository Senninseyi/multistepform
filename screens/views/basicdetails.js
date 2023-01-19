import { View, Text, TextInput, StyleSheet } from "react-native";

export const BasicDetails = ({ formData, setFormData }) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="firstname"
          placeholderTextColor="red"
          value={formData.firstname}
          onChangeText={(firstname) => {
            setFormData({ ...formData, firstname });
          }}
        />
      </View>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="lastname"
          placeholderTextColor="red"
          value={formData.lastname}
          onChangeText={(lastname) => {
            setFormData({ ...formData, lastname });
          }}
        />
      </View>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="address"
          placeholderTextColor="red"
          value={formData.address}
          onChangeText={(address) => {
            setFormData({ ...formData, address });
          }}
        />
      </View>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          keyboardType="email-address"
          placeholderTextColor="red"
          value={formData.email}
          onChangeText={(email) => {
            setFormData({ ...formData, email });
          }}
        />
      </View>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          keyboardType="number-pad"
          placeholderTextColor="red"
          value={formData.password}
          onChangeText={(password) => {
            setFormData({ ...formData, password });
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
