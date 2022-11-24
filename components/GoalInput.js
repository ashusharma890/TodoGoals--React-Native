import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  Text,
} from "react-native";

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  function getInput(text) {
    // console.log(text);
    setGoalText(text);
  }

  function addGoal() {
    props.getGoal(goalText);
    setGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Todo Goals</Text>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="Your goal"
          style={styles.TextInput}
          onChangeText={getInput}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#65cca9" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color="#de193e" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor: "#a25670",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    // marginRight: 8,
    padding: 16,
    color: "#120438",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
