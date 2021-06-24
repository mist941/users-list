import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  userCardWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  userImageWrapper: {
    overflow: "hidden",
    borderRadius: 150,
    width: 60,
    height: 60,
  },
  userImage: {
    width: "100%",
    height: '100%',
  },
  userText: {
    marginLeft: 15,
    fontSize: 20,
    color: "#696969",
  },
});
