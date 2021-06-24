import React, {FC} from "react";
import {View, TextInput, TextInputProps} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {styles} from "./module.style";

const InputSearch: FC<TextInputProps> = ({...rest}) => {
  return (
    <View style={styles.inputWrapper}>
      <Ionicons
        style={styles.inputIcon}
        name="search"
        size={25}
        color="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder="Search for Users"
        placeholderTextColor="#808080"
        {...rest}
      />
    </View>
  );
};

export default InputSearch;

