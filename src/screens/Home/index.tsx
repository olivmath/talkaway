import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { SearchBar } from "./SearchBar";
import styles from "./styles";


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