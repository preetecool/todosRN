import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
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
  const [task, setTask] = useState();
  const [allTasks, setAllTasks] = useState([]);

  const handleTaskAdding = () => {
    Keyboard.dismiss();
    setAllTasks([...allTasks, task]);
    setTask(null);
  };

  const doneTask = (index) => {
    let taskCopy = [...allTasks];
    taskCopy.splice(index, 1);
    setAllTasks(taskCopy);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Your tasks</Text>
          <View style={styles.items}>
            {allTasks.map((aTask, index) => {
              return (
                <>
                  <TouchableOpacity key={index} onPress={() => doneTask(index)}>
                    <Task text={aTask} />
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrap}
        >
          <TextInput
            style={styles.input}
            placeholder={"What am I doing today?"}
            ceh
            value={task}
            onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity onPress={() => handleTaskAdding()}>
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: 250,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    paddingHorizontal: 1,
  },
  addTaskWrap: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 0.5,
  },
  addText: {
    fontSize: 24,
  },
});
