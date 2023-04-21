import React from "react";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppRoutes } from "./src/routes/app.router";

export default function App() {
  const [fontsLoaded] = useFonts({
    OPENSANS_LIGHT_CONDENSED: require("./assets/fonts/opens-sans/OpenSans_Condensed-Light.ttf"),
    OPENSANS_MEDIUM_CONDENSED: require("./assets/fonts/opens-sans/OpenSans_Condensed-Medium.ttf"),
    OPENSANS_REGULAR_CONDENSED: require("./assets/fonts/opens-sans/OpenSans_Condensed-Regular.ttf"),
    OPENSANS_BOLD_CONDENSED: require("./assets/fonts/opens-sans/OpenSans_Condensed-Bold.ttf"),
    OPENSANS_LIGHT: require("./assets/fonts/opens-sans/OpenSans-Light.ttf"),
    OPENSANS_MEDIUM: require("./assets/fonts/opens-sans/OpenSans-Medium.ttf"),
    OPENSANS_REGULAR: require("./assets/fonts/opens-sans/OpenSans-Regular.ttf"),
    OPENSANS_BOLD: require("./assets/fonts/opens-sans/OpenSans-Bold.ttf"),
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
