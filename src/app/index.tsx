import { View, Text, StyleSheet, Alert, Image, Platform } from "react-native";
import { useState } from "react";
import {
  useFonts,
  RedditSans_500Medium,
  RedditSans_700Bold,
} from "@expo-google-fonts/reddit-sans";

import Button from "@/components/button";
import Input from "@/components/input";
import { router } from "expo-router";

import AppLoading from "expo-app-loading";

export default function Index() {
  const [name, setName] = useState<string>();
  const [fontsLoaded] = useFonts({
    RedditSans_500Medium,
    RedditSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
      <View style={styles.containerText}>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.description}>
          Irei te ajudar a controlar sua ansiedade ou depressão
        </Text>
      </View>

      <View style={styles.containerFirtsButtons}>
        <Button
          title="Ajuda urgente"
          style={{ backgroundColor: "rgba(61, 133, 65, 1)" }}
        />

        <Button
          title="Criar uma conta"
          style={{ backgroundColor: "#59E1FF" }}
          onPress={handleNext}
        />
      </View>

      <View style={styles.line} />

      <View style={styles.buttonCreateAccount}>
        <Button
          title="Fazer login"
          style={{ backgroundColor: "#a7dbd8" }}
          onPress={handleNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "RedditSans_700Bold",
    flex: 1,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#e0e4cc",
  },
  title: {
    color: "black",
    fontSize: 50,
    fontFamily: "RedditSans_500Medium",
  },
  containerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  description: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "RedditSans_500Medium",
  },
  imageBot: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },
  containerFirtsButtons: {
    flex: 1,
    alignItems: "center",
    gap: 40,
    marginBottom: 50,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
    marginBottom: 60,
  },
  buttonCreateAccount: {
    marginBottom: 50,
    alignItems: "center",
  },
});
