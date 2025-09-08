import { View, Text, StyleSheet, Alert, Image, Platform } from "react-native";
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
      <Image
        source={require("../../assets/images/image_bot.png")}
        style={styles.imageBot}
      />
      <Text style={styles.title}>Olá</Text>
      <Text style={styles.description}>
        Irei te ajudar a controlar sua ansiedade ou depressão
      </Text>

      <Button
        title="Clique aqui se está precisando
de ajuda urgente"
      />

      <Button title="Criar uma conta" onPress={handleNext} />

      <Button title="Fazer login" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    flex: 1,
    padding: 15,
    justifyContent: "center",
    gap: 20,
  },
  title: {
    color: "black",
    fontSize: 50,
  },
  description: {
    flex: 1,
    alignItems: "center",
    fontSize: 20,
  },
  imageBot: {
    width: "100%",
    height: 300,
    marginLeft: 100,
  },
});
