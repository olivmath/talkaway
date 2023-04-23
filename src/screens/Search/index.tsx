import { View } from "react-native";
import { styles } from "./styles";
import { SearchBar } from "./SearchBar";

export function Search() {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
}
