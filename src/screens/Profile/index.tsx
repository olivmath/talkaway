import { View, Text } from "react-native";
import { styles } from "./styles";
import { Login } from "./Login/indext";

export function Profile() {
  const handleLoginSuccess = () => {
    console.log("Login ✅");
  };
  const handleSignUp = () => {
    console.log("Subscribe ✅");
  };

  return (
    <View style={styles.container}>
      <Login onLoginSuccess={handleLoginSuccess} onSignUp={handleSignUp} />
    </View>
  );
}
