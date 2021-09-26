import React from "react";
import {
  Dimensions,
  Modal as ModalComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  children: React.ReactNode;
  visibility: boolean;
}

const Modal = ({ children, visibility }: Props) => {
  return (
    <ModalComponent
      animationType="slide"
      transparent={true}
      visible={visibility}
    >
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 4,
    minWidth: Dimensions.get("window").width - 100,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default Modal;
