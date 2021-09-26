import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  points: any[];
  closeModal: () => void;
}

const List = ({ points, closeModal }: Props) => {
  console.log(points);
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((p) => p.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={closeModal} title="Close" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 350,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 40,
    padding: 10,
  },
  button: {
    paddingBottom: 15,
  },
});

export default List;
