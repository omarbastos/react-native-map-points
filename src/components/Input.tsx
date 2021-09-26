import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export interface InputProps {
  title: string;
  [key: string]: any;
}
const Input = (props: InputProps) => {
  const { title, ...rest } = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}> {title}</Text>
      <TextInput {...rest} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  text: {
    marginLeft: -5,
  },
  wrapper: {
    height: 40,
  },
});
