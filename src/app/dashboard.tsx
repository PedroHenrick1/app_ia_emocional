import Button from "@/components/button";
import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Voltar" onPress={router.back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 20,
  },
  title: {
    color: "#5159a0ff",
    fontSize: 24,
  },
});
