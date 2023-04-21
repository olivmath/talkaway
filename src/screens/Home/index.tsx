import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { SearchBar } from "./SearchBar";
import theme from "../../theme";

export function Home() {
  const image = require("../../../assets/image/background-home.png");

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <SearchBar />
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => console.log("Walking Class pressed")}
          >
            <Text style={styles.buttonText}>Walking Class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => console.log("Walking Tour Class pressed")}
          >
            <Text style={styles.buttonText}>Walking Tour Class</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleButton: {
    width: 160,
    height: 160,
    borderRadius: 8,
    backgroundColor: theme.COLORS.TANGERINE,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    margin: 8,
  },
  buttonText: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    fontFamily: theme.FONTS.OS_BD,
  },
});
