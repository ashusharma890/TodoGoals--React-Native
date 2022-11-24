import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoal() {
    setModalVisible(true);
  }

  function endGoal() {
    setModalVisible(false);
  }

  function getGoal(goalText) {
    // console.log(goalText)
    setGoalList((goals) => [
      ...goals,
      { text: goalText, id: Math.random().toString() },
    ]);
    // setModalVisible(false);
    endGoal();
  }

  function deleteGoal(id) {
    // console.log("delete");
    setGoalList((goals) => {
      return goals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color="#65cca9" onPress={startAddGoal} />
        {modalVisible && (
          <GoalInput
            visible={modalVisible}
            getGoal={getGoal}
            cancel={endGoal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={deleteGoal}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    // backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
