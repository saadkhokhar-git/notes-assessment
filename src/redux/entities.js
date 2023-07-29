import { combineReducers } from "redux";
import notesReducer from "./slices/NoteSlice";
export default combineReducers({
  notesReducer,
});
