import * as actionTypes from "./actionTypes";
import axios from "axios";
import { userData } from "../data/userdata";

export const Search_User = (name) => {
  console.log("searchuser");
  let data = userData.find((e) => e.name === name);
  console.log("data", data);
  return (dispatch) => {
    dispatch({
      type: actionTypes.SEARCH_RESULT,
      data: data,
    });
  };
};

export const Goto_specific_user = (data) => {
  let user = data;
  console.log("dispatch userspecific data", data);
  return (dispatch) => {
    dispatch({
      type: actionTypes.GOTOUSER,
      data: data,
    });
  };
};
