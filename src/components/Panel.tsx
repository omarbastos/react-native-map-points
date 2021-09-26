import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

interface Props {
  handleOpenList: () => void;
  textLeft: string;
  togglePointFilter: () => void;
}

const Panel = ({ handleOpenList, textLeft, togglePointFilter }: Props) => {
  return (
    <View style={styles.panel}>
      <Button onPress={handleOpenList} title={textLeft}></Button>

      <Button onPress={togglePointFilter} title="Show/Hide"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  panel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default Panel;
