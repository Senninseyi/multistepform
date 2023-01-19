import { View, Text, TextInput, StyleSheet } from "react-native";

export const BasicDetails = ({ formData, setFormData }) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={{ textAlign: "center", fontSize: 26, letterSpacing: 0.875 }}>
        BasicDetails
      </Text>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="firstname"
          placeholderTextColor="white"
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
          placeholderTextColor="white"
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
          placeholderTextColor="white"
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
          placeholderTextColor="white"
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
          placeholderTextColor="white"
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
