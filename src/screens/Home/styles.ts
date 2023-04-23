import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleButton: {
    width: 160,
    height: 160,
    borderRadius: 8,
    backgroundColor: theme.COLORS.TANGERINE,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    margin: 8,
  },
  buttonText: {
    fontSize: 32,
    color: theme.COLORS.WHITE,
    textAlign: "center",
    fontFamily: theme.FONTS.OS_BD,
  },
});
  