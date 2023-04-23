import { StyleSheet } from "react-native";
import theme from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    width: "100%",
  },
  inputsContainer: {
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.COLORS.TANGERINE,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: "100%",
    fontSize: 24,
    fontFamily: theme.FONTS.OS_MD,
  },
  signUpLink: {
    alignSelf: "center",
    marginBottom: 16,
  },
  linkText: {
    color: theme.COLORS.TANGERINE,
    fontFamily: theme.FONTS.OS_MD,
    fontSize: 24,
  },
  button: {
    backgroundColor: theme.COLORS.TANGERINE,
    borderRadius: 4,
    padding: 8,
    paddingHorizontal: 64,
    alignItems: "center",
    marginBottom: 80,
  },
  buttonText: {
    color: theme.COLORS.WHITE,
    fontFamily: theme.FONTS.OS_BD,
    fontSize: 24,
  },
});
