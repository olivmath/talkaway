import { StyleSheet } from "react-native";
import theme from "../../../theme";

const commonFontStyle = {
  fontFamily: theme.FONTS.OS_RG,
  fontSize: 16,
};

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: theme.COLORS.WHITE,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    ...commonFontStyle,
    fontFamily: theme.FONTS.OS_BD,
    fontSize: 24,
  },
  language: {
    ...commonFontStyle,
    backgroundColor: theme.COLORS.TANGERINE,
    color: theme.COLORS.WHITE,
    borderRadius: 4,
    padding: 4,
  },
  price: {
    ...commonFontStyle,
    fontFamily: theme.FONTS.OS_BD,
    color: "green",
  },
  walkings: {
    ...commonFontStyle,
  },
  rating: {
    ...commonFontStyle,
  },
  city: {
    ...commonFontStyle,
  },
});
