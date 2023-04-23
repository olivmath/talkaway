import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleClearPress = () => {
    setSearchInput("");
  };

  const handleSearchSubmit = () => {
    console.log(searchInput);
  };

  const exampleSearches = ["Rio de Janeiro", "Inglês", "100"];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchInput}
          onChangeText={setSearchInput}
          placeholder="Buscar..."
          onSubmitEditing={handleSearchSubmit}
        />
        <TouchableOpacity
          style={styles.clearIconContainer}
          onPress={handleClearPress}
        >
          <Feather name="x" style={styles.clearIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.examplesContainer}>
        {exampleSearches.map((example, index) => (
          <Text
            key={index}
            style={styles.example}
            onPress={() => setSearchInput(`${searchInput} ${example}`)}
          >
            {example}
          </Text>
        ))}
      </View>
    </View>
  );
}
