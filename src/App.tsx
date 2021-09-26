import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Map from "./components/Map";
import Modal from "./components/Modal";
import Panel from "./components/Panel";
import Input from "./components/Input";
import List from "./components/List";
import { VisibilityFilter } from "./utils/enum";

export default function App() {
  const [points, setPoints] = useState<any[]>([]);
  const [point, setPoint] = useState<any>({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState(
    VisibilityFilter.NewPoint
  );
  const [visibility, setVisibility] = useState(false);

  const handleSetName = (n: string) => {
    setName(n);
  };
  const handleLongPress = ({ nativeEvent }: any) => {
    setVisibilityFilter(VisibilityFilter.NewPoint);
    setPoint(nativeEvent.coordinate);
    setVisibility(true);
  };
  const handleCancel = () => {
    setPoint({});
    setVisibility(false);
    setName("");
  };
  const handleSubmit = () => {
    const newPoint = { coordinate: point, name: name };
    setPoints(points.concat(newPoint));
    handleCancel();
  };
  const handleOpenList = () => {
    setVisibilityFilter(VisibilityFilter.AllPoints);
    setVisibility(true);
  };
  return (
    <View style={styles.container}>
      <Map points={points} onLongPress={handleLongPress} />
      <Panel handleOpenList={handleOpenList} textLeft="Lista" />
      <Modal visibility={visibility}>
        {visibilityFilter === VisibilityFilter.NewPoint ? (
          <View style={styles.form}>
            <Input
              onChangeText={handleSetName}
              placeholder="Point name"
              title="Name"
            />
            <View style={styles.modalActionButtons}>
              <Button title="Cancel" onPress={handleCancel}></Button>
              <Button title="Save" onPress={handleSubmit}></Button>
            </View>
          </View>
        ) : (
          <List closeModal={() => setVisibility(false)} points={points} />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 10 },
  modalActionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
