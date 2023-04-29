import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../redux/noteReducer";

const NoteList = ({ title, note, id, timeStamp, status }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote({ id }));
  };

  return (
    <div className="border border-dark p-4 rounded">
      <h3>{title}</h3>
      {status === true ? (
        <p>
          <s>{note}</s> ✅
        </p>
      ) : (
        <p>{note} (Pending)</p>
      )}
      <div className="align-middle justify-center">
        <Link to={`/edit/${id}`} className="btn btn-sm btn-primary">
          ✏️ Edit
        </Link>
        <button
          onClick={() => handleDelete(id)}
          to={`/delete/${id}`}
          className="btn btn-sm btn-danger ms-2"
        >
          🗑️ Delete
        </button>
      </div>

      <p className="my-3">Time: {timeStamp} IST</p>
    </div>
  );
};

export default NoteList;
