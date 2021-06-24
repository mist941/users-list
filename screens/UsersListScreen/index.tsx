import React, {useEffect, useMemo, useState} from "react";
import {View} from "react-native";
import InputSearch from "../../components/InputSearch";
import UsersList from "../../components/UsersList";
import {User, UserResponse} from "../../types/User";
import useDebounce from "../../hooks/debounce";

const UsersListScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data: UserResponse) => {
        setUsers(data.data ?? []);
      })
      .catch(err => console.log(`Was Error: ${err}`));
  }, []);

  const filterByUsers = (search: string) => {
    return users.filter((user: User) => {
      const searchValue = `${user.first_name} ${user.last_name}`
      if (searchValue.indexOf(search) > -1) return true;
    });
  }

  return (
    <View>
      <InputSearch
        value={searchValue}
        onChangeText={(value) => setSearchValue(value)}
      />
      <UsersList users={filterByUsers(debouncedSearch)}/>
    </View>
  );
};

export default UsersListScreen;
