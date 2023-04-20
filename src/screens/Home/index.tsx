import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

export function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchIconPress = () => {
    setSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearchIconPress} style={styles.searchIcon}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>

      {searchOpen && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            autoFocus={true}
            placeholder="Search..."
            onBlur={handleCloseSearch}
          />
        </View>
      )}

      <Text style={styles.text}>Talk Away!</Text>
    </View>
  );
}
