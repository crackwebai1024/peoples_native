import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Platform,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import { Search_User } from "../store/action";
import UserListItem from "./UserListItem";

const Home = (props) => {
  const goToUser = () => {
    Actions.user();
  };
  const [username, setUserName] = useState("");
  const { und } = props;
  const searchUser = () => {
    console.log("debg");
    props.searchUser(username);
  };

  const { users, loading } = props;
  console.log("users", users, loading);
  console.log(username);
  console.log("this");
  return (
    <View style={styles.container}>
      <View style={styles.upper}></View>
      {und && (
        <View>
          <Text style={{ color: "red" }}>There is no data you entered</Text>
        </View>
      )}
      <View style={styles.searchbox}>
        <TextInput
          style={styles.txtinput}
          placeholder="username"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          name="username"
          onChangeText={(text) => setUserName(text)}
        />
        <Icon
          style={styles.icon}
          name={Platform.OS === "ios" ? `ios-search` : `md-search`}
          size={20}
          onPress={searchUser}
        />
      </View>
      {users.map((item) => (
        <UserListItem data={item} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  upper: {
    height: 60,
  },
  searchbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingBottom: 3,
    borderBottomColor: "dodgerblue",
    borderBottomWidth: 1,
  },
  txtinput: {
    paddingBottom: 1,
    marginBottom: 1,
    height: 50,
    fontSize: 20,
  },
  icon: {
    height: 50,
    paddingTop: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.main.users,
    loading: state.main.loading,
    und: state.main.und,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (name) => dispatch(Search_User(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
