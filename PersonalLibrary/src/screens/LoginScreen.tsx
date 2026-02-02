import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <TextInput
          placeholder="Email"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />

        <CustomButton
          title="Login"
          onClick={() => Alert.alert("Login")}
        />

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgotten Password?</Text>
        </TouchableOpacity>

        <Text style={styles.divider}>or log in with</Text>

        <CustomButton
          title="Sign up with Google"
          onClick={() => Alert.alert("Google")}
          variant="secondary"
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },
  card: {
    width: "85%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  forgot: {
    fontSize: 13,
    color: "#666",
    marginVertical: 10,
  },
  divider: {
    marginVertical: 10,
    color: "#888",
  },
});
