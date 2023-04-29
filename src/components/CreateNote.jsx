import { useState } from "react";
import { addNote } from "../redux/noteReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(false);

  let date = new Date();
  let timeStamp = date.toString().slice(0,24);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100000);
    dispatch(addNote({ id, title, note, status, timeStamp }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-50 justify-content-center align-item-center mt-4">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New Note</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Enter title:</label>
            <input
              type="text"
              name="note"
              className="form-control"
              placeholder="enter new note"
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

export default CreateNote;
