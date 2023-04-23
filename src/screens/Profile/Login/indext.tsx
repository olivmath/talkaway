import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import styles from "./styles";
import theme from "../../../theme";

interface Props {
  onLoginSuccess: () => void;
  onSignUp: () => void;
}

export function Login({ onLoginSuccess, onSignUp }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implemente aqui a lógica de autenticação
    const isAuthenticated = username && password;

    if (isAuthenticated) {
      onLoginSuccess();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="User"
          value={username}
          onChangeText={setUsername}
          selectionColor={theme.COLORS.TANGERINE}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          selectionColor={theme.COLORS.TANGERINE}
        />
        <TouchableOpacity onPress={onSignUp} style={styles.signUpLink}>
          <Text style={styles.linkText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Go</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
