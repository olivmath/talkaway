import { View, Text } from "react-native";
import { styles } from "./styles";
import { SearchBar } from "./SearchBar";

export function Home() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.text}>Talk Away!</Text>
    </View>
  );
}
