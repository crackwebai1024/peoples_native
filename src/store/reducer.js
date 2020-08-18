import * as actionTypes from "./actionTypes";
import { updateObject } from "./utility";

const initialstate = {
  users: [],
  loading: false,
  und: false,
  user: "",
};

const getresult = (state, action) => {
  if (action.data === undefined) {
    state.und = true;
  } else {
    state.und = false;
    state.users.push(action.data);
  }
  state = updateObject(state, {
    loading: !state.loading,
  });
  console.log(state);
  return state;
};

const getspecuser = (state, action) => {
  state = updateObject(state, {
    user: action.data,
  });
  console.log(
    "------------------*********************------------------",
    state
  );
  return state;
};

const reducer = (state, action) => {
  if (state === undefined) {
    state = initialstate;
  }
  switch (action.type) {
    case actionTypes.SEARCH_RESULT:
      return getresult(state, action);
    case actionTypes.GOTOUSER:
      return getspecuser(state, action);
    default:
      return state;
  }
};

export default reducer;
