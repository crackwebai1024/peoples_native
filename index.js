import React from "react";
import { registerRootComponent } from "expo";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/store/reducer";
import App from "./App";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  main: reducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const RouteApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RouteApp);
