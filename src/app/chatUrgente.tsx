import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

import axios from "axios";

export default function ChatUrgente() {
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  async function getBotResponse(userMessage: string) {
    try {
      const response = await axios.post(
        "http://192.168.0.107:8000/api/conversa/",
        {
          message: userMessage,
          session_id: "teste",
        }
      );
      return response.data.response; // ajuste conforme o retorno da sua API
    } catch (error) {
      console.log(error);
      return "Desculpe, houve um erro ao responder.";
    }
  }

  async function sendMessage() {
    if (input.trim() === "") return;
    const userMsg = { id: Date.now().toString(), text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const botReply = await getBotResponse(input);
    const botMsg = { id: (Date.now() + 1).toString(), text: botReply };
    setMessages((prev) => [...prev, botMsg]);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          style={styles.messagesList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Digite sua mensagem..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#ffffffff" },
  messagesList: { flex: 1, marginBottom: 8 },
  messageBubble: {
    marginTop: 30,
    backgroundColor: "#e0e4cc",
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  messageText: { fontSize: 16 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 20,
  },
  sendButton: {
    backgroundColor: "#59E1FF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
