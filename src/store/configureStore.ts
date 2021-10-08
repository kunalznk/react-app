// import { createStore } from "redux";
// import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
// const store = createStore(reducer , devToolsEnhancer({trace : true}));
// import reducer from "./reducer";
// import api from "./api";

import entitiesReducer from "./entities";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    entities: entitiesReducer,
  },
});

export default store;
