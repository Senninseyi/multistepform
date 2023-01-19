import * as React from "react";
import FormApp from "./screens/formApp";
import * as Network from "expo-network";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  NetInfo.fetch().then((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });

  return <FormApp />;
}
