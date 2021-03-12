import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Press me" onPress={() => navigation.navigate("Test")} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
