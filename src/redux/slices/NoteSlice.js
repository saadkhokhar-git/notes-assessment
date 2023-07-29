import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },

    updateNote: (state, action) => {
      const response = action.payload;
      state.notes.map((note) => {
        if (note.id === response?.id) {
          note.title = response.title;
          note.description = response.description;
        }
        return note;
      });
    },

    deleteNote: (state, action) => {
      const id = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export const selectNotes = (state) => state.entity?.notesReducer?.notes;
export const isLoading = (state) => state.entity?.notesReducer?.loading;

export default notesSlice.reducer;
