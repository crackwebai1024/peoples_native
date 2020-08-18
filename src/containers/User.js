import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

const User = (props) => {
  console.log("-------- userdata ---------", props.data);
  return <View></View>;
};

const style = StyleSheet.create({});
const mapStateToProps = (state) => {
  return {
    data: state.main.user,
  };
};

export default connect(mapStateToProps, null)(User);
