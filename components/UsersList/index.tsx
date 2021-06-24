import React, {FC} from "react";
import {ScrollView, Text, View} from "react-native";
import {styles} from "./module.style";
import {User} from "../../types/User";
import UsersItem from "../UserItem";

interface Props {
  users: User[];
}

const UsersList: FC<Props> = ({users}) => {
  if (!users.length) return <Text style={styles.emptyUsersNotification}>No results</Text>;
  return (
    <View style={styles.pageWrapper}>
      <ScrollView style={{height: "95%"}}>
        {users.map(user => <UsersItem user={user}/>)}
      </ScrollView>
    </View>
  );
};

export default UsersList;

