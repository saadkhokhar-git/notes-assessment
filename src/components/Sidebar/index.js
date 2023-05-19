import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/slices/NoteSlice";
import { handleCharacters } from "../../utils/charactersHandling";
import "./style.css";

const Sidebar = ({ notes, editHandler }) => {
  const dispatch = useDispatch();

  const deleteHandler = (event, id) => {
    event.stopPropagation();
    dispatch(deleteNote(id));
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">Notes List</h2>
      <ul>
        {notes?.length > 0 &&
          [...notes].reverse().map((note) => (
            <li key={note?.id}>
              <div className="note-item">
                <span className="note-title">
                  {handleCharacters(note?.title)}
                </span>
              </div>
              <div className="buttons-container">
                <DeleteIcon onClick={(e) => deleteHandler(e, note.id)} />
                <EditRoundedIcon onClick={() => editHandler(note.id)} />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
