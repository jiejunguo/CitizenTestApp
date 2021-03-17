import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TestScreen from "./src/screens/TestScreen";
import { TestProvider } from "./src/context/TestContext";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Test: TestScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "AU Citizen Test",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <TestProvider>
      <App />
    </TestProvider>
  );
};
