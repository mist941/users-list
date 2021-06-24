import React, {FC} from "react";
import {View, Image, Text} from "react-native";
import {styles} from "./module.style";
import {User} from "../../types/User";

interface Props {
  user: User;
}

const UsersItem: FC<Props> = ({user}) => {
  const {first_name, last_name, avatar} = user;
  return (
    <View style={styles.userCardWrapper}>
      <View style={styles.userImageWrapper}>
        <Image source={{uri: avatar}} style={styles.userImage}/>
      </View>
      <Text style={styles.userText}>{first_name} {last_name}</Text>
    </View>
  );
};

export default UsersItem;

