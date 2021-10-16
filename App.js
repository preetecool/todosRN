import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Your tasks</Text>
          <View style={styles.items}>
            <Task text={"Task 1"} />
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          styles={styles.writeTaskWrap}
        >
          <TextInput
            style={styles.input}
            placeholder={"What am I doing today?"}
            ceh
          ></TextInput>
          <TouchableOpacity>
            <View style={styles.addTaskWrap}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F2F8",
  },
  taskWrapper: {
    paddingTop: 90,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrap: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 200,
  },
  addTaskWrap: {},
  addText: {},
});
