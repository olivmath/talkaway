import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    fontFamily: "ROBOTO_LIGHT",
  },
  searchIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  searchIconText: {
    fontSize: 30,
  },
  searchContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    zIndex: 2,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
  },
});