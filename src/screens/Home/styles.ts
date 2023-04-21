import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.GOLDEN,
  },
  containerButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 50,
    fontFamily: theme.FONTS.OS_MD,
  },
});
