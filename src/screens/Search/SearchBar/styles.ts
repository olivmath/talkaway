import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 16,
    right: 16,
    left: 16,
  },
  searchIconContainer: {
    padding: 8,
  },
  searchIcon: {
    fontSize: 32,
    borderRadius: 8,
    padding: 8,
    alignSelf: "flex-end",
    color: theme.COLORS.WHITE,
    backgroundColor: theme.COLORS.TANGERINE,
  },
  searchContainer: {
    width: "100%",
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  examplesContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  example: {
    fontSize: 16,
    paddingVertical: 2,
  },
  clearIconContainer: {
    padding: 4,
  },
  clearIcon: {
    fontSize: 24,
    color: theme.COLORS.GOLDEN,
  },
});
