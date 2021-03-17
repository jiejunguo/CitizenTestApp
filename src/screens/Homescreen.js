import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TestContext from "../context/TestContext";

function HomeScreen({ navigation }) {
  const value = useContext(TestContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Australian Citizen Test</Text>
      <Text>{value}</Text>
      <Button title="Start Test" onPress={() => navigation.navigate("Test")} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
