import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import { Activities } from "./views/activities";
import { BasicDetails } from "./views/basicdetails";
import { Skills } from "./views/skills";
import { Buttons } from "../components/button/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Network from "expo-network";
import "react-native-url-polyfill/auto";
import { supa } from "../lib/supabase";

export default function FormApp() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    company: "",
    hobbies: "",
    softskills: "",
    hardskills: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [screen, setScreen] = useState(0);
  const FormTitle = ["Details", "Activities", "Skills"];

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const dps = () => {
    if (screen === 0) {
      return <BasicDetails formData={formData} setFormData={setFormData} />;
    } else if (screen === 1) {
      return <Activities formData={formData} setFormData={setFormData} />;
    } else if (screen === 2) {
      return <Skills formData={formData} setFormData={setFormData} />;
    } else {
      return (
        <Buttons
          onPress={() => {
            setScreen(0);
            setFormData(initialState);
          }}
        >
          Restart Submission
        </Buttons>
      );
    }
  };

  const submitData = async () => {
    const isConnected = await Network.getNetworkStateAsync();
    if (isConnected.isConnected) {
      const { error } = await supa.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            firstname: formData.firstname,
            lastname: formData.lastname,
            address: formData.address,
            company: formData.company,
            hobbies: formData.hobbies,
            softskills: formData.softskills,
            hardskills: formData.hardskills,
          },
        },
      });

      if (error) {
        Alert.alert(error.message);
      } else {
        Alert.alert("Success", "data sent to supabase");
        setScreen(0);
        setFormData(initialState);
      }
    } else {
      storeData(formData);
      setScreen(0);
      console.log(formData);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{FormTitle[screen]}</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>{dps()}</View>
      </TouchableWithoutFeedback>
      <View style={styles.btnContainer}>
        {screen > 0 && (
          <Buttons
            disabled={screen === 0}
            onPress={() => {
              setScreen((current) => current - 1);
            }}
          >
            Prev
          </Buttons>
        )}

        {screen < FormTitle.length - 1 && (
          <Buttons
            onPress={() => {
              setScreen((current) => current + 1);
            }}
          >
            Next
          </Buttons>
        )}

        {screen === FormTitle.length - 1 && (
          <Buttons onPress={() => submitData()}>Submit</Buttons>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 12,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  screen: {
    width:"80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFBFC",
    padding: 16,
    elevation: 5,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
  },
  btnContainer: {
    width: Dimensions.get('window').width / 2,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
});
