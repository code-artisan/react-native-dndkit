import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

import { DraggableBasicExample } from "./src/DraggableBasicExample";
import { DraggableGridExample } from "./src/DraggableGridExample";
import { DraggableStackExample } from "./src/DraggableStackExample";

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <GestureHandlerRootView style={styles.body}>
          <DraggableBasicExample />
          <DraggableGridExample />
          <DraggableStackExample />
        </GestureHandlerRootView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  body: {
    gap: 10,
    height: "100%",
  },
});
