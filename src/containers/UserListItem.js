import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { Goto_specific_user } from "../store/action";

const UserListItem = (props) => {
  const goToUser = () => {
    props.gotospecuser(props.data);
    Actions.user();
  };
  // let source = "assets/jack";
  let source = props.data.pictureuri;
  console.log("-----------------------", props.data.pictureuri);
  return (
    <TouchableOpacity onPress={goToUser} style={styles.user}>
      <View style={styles.user}>
        <Image
          source={{
            uri: source,
          }}
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.username}>{props.data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: "80%",
  },
  username: {
    fontSize: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    gotospecuser: (userdata) => dispatch(Goto_specific_user(userdata)),
  };
};
export default connect(null, mapDispatchToProps)(UserListItem);
