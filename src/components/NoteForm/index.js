import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNote,
  deleteNote,
  selectNotes,
  updateNote,
} from "../../redux/slices/NoteSlice";
import Sidebar from "../Sidebar";
import "./style.css";

const NoteForm = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [id, setID] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const notes = useSelector(selectNotes);

  const handleAddNote = () => {
    setShowForm(true);
    setSelectedNoteIndex(null);
    setID("");
    setTitle("");
    setDescription("");
  };

  const generateID = () => {
    return Math.floor(Math.random() * 100000);
  };

  const handleSaveNote = () => {
    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }
    const newNote = { id: generateID(), title, description };
    dispatch(addNote(newNote));
    resetForm();
  };

  const handleEditNote = () => {
    const updatedNote = { id, title, description };
    dispatch(updateNote(updatedNote));
    resetForm();
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote(selectedNoteIndex));
    resetForm();
  };

  const resetForm = () => {
    setID("");
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  const handleNoteClick = (id) => {
    setShowForm(true);
  };

  const handleEditHandler = (id) => {
    notes.map((note) => {
      if (note?.id === id) {
        console.log("Condition success", note);
        setID(note.id);
        setTitle(note.title);
        setDescription(note.description);
      }
    });
    setShowForm(true);
  };

  return (
    <div className="note-main">
      <Sidebar
        notes={notes}
        handleNoteClick={handleNoteClick}
        editHandler={handleEditHandler}
      />
      <div className=".note-form-container">
        <div className=".note-form">
          <div className="abc">
            <div className=".note-form-heading">
              <h2>Notes App</h2>
            </div>
            <div className="icon-contains">
              {!showForm && (
                <>
                  <AddBoxRoundedIcon
                    sx={{ fontSize: 50 }}
                    onClick={() => handleAddNote()}
                  />
                </>
              )}
            </div>

            {showForm && (
              <div className="form">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="titleText"
                  required
                />
                <br />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="descText"
                />
                <br />
                <div className="button-one">
                  <button onClick={id ? handleEditNote : handleSaveNote}>
                    {id ? "Save Edit" : "Save"}
                  </button>
                  {id && <button onClick={handleDeleteNote}>Cancel</button>}
                  {!id && <button onClick={resetForm}>Cancel</button>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
