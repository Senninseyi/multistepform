import { View, Text, StyleSheet, TextInput } from 'react-native';

export const Skills = ({ formData, setFormData }) => {

  return (
    <View style={{ width: '100%' }}>
      <Text style={{ textAlign: 'center', fontSize: 26, letterSpacing: 0.875 }}>
        Skills
      </Text>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="softskills"
          placeholderTextColor="white"
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
          placeholderTextColor="white"
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
    backgroundColor: 'red',
    borderRadius: 15,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    paddingStart: 20,
    marginVertical: 12,
    color: 'white',
  },
  textInput: {
    color: 'white',
  },
});
