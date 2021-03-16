import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import questions from "../../all_questions.json";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Australian Citizen Test</Text>
      <Button title="Start Test" onPress={() => navigation.navigate("Test")} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
