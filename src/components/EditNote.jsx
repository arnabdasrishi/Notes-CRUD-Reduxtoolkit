import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/noteReducer";

const EditNote = () => {
  const notes = useSelector((state) => state.notes);

  const { id } = useParams();
  const dispatch = useDispatch();

// eslint-disable-next-line
  const existingNotes = notes.filter((f) => f.id == id);
  const { note, status, title } = existingNotes[0];

  const [filteredNote, setNote] = useState(note);
  const [filteredStatus, setStatus] = useState(status);
  const [filteredTitle, setTitle] = useState(title);

  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        note: filteredNote,
        status: filteredStatus,
        title: filteredTitle,
      })
    );
    navigate('/')
  };

  return (
    <div className="d-flex w-100 vh-50 justify-content-center align-item-center mt-4">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update your Note</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="enter title to edit"
              value={filteredTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="note">Note:</label>
            <input
              type="text"
              name="note"
              className="form-control"
              placeholder="enter new note"
              value={filteredNote}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="status">Status :</label>
            <select
              onChange={(e) =>
                setStatus(e.target.value === "true" ? true : false)
              }
            >
              <option value=""> Select Status</option>
              <option value="true">Completed</option>
              <option value="false">Not Completed</option>
            </select>
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
