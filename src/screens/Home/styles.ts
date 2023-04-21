import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.GOLDEN,
  },
  text: {
    fontSize: 50,
    fontFamily: "OPENSANS_BOLD",
  },
});
