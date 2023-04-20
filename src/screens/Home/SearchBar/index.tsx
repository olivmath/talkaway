// SearchBar.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { styles } from "./styles";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchIconPress = () => {
    setIsSearchFocused(true);
  };

  const handleExamplePress = (example: string) => {
    setSearchInput(example);
  };

  const exampleSearches = ["Rio de Janeiro", "Inglês", "100"];

  return (
    <View style={styles.container}>
      {isSearchFocused ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="Buscar..."
            autoFocus
            onBlur={() => setIsSearchFocused(false)}
          />
          <View style={styles.examplesContainer}>
            {exampleSearches.map((example, index) => (
              <Text
                key={index}
                style={styles.example}
                onPress={() => handleExamplePress(example)}
              >
                {example}
              </Text>
            ))}
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={handleSearchIconPress}
          style={styles.searchIconContainer}
        >
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
