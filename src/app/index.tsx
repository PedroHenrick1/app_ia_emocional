import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Button from "@/components/button";
import Input from "@/components/input";
import { router } from "expo-router";

export default function Index() {
  const [name, setName] = useState<string>();

  function handleNext() {
    router.navigate("/dashboard");
  }

  function onChangeText(text: string) {
    setName(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá,{name}</Text>
      <Input onChangeText={setName} />
      <Button title="Entrar" onPress={handleNext} />
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
    color: "red",
    fontSize: 24,
  },
});
