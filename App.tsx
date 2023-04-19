import React from "react";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppRoutes } from "./src/routes/app.router";

export default function App() {
  const [fontsLoaded] = useFonts({
    ROBOTO_REGULAR: require("./assets/fonts/roboto/Roboto-Regular.ttf"),
    ROBOTO_LIGHT: require("./assets/fonts/roboto/Roboto-Light.ttf"),
    ROBOTO_BOLD: require("./assets/fonts/roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Font not loaded</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AppRoutes />
    </View>
  );
}
