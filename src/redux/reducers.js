import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import entitiesReducer from "./entities";

const persistConfig = {
  key: "entities",
  storage,
};

const reducers = combineReducers({
  entity: entitiesReducer,
});

export default persistReducer(persistConfig, reducers);
