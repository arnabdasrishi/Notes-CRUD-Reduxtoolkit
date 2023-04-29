import React from "react";
import { Link } from "react-router-dom";
import NoteList from "./NoteList";
import { useSelector } from "react-redux";

import "../App.css";

const HomePage = () => {
  const notes = useSelector((state) => state.notes);

  if (notes.length <= 0) {
    return (
      <div className="text-center">
        <h2>CRUD with Redux</h2>
        <Link to="/create" className="btn btn-success my-3">
          + Create Note
        </Link>
        <div className="my-5">
          <h1 className="text-secondary">No Notes Added</h1>
          <h3 className="text-secondary">Please click on Create Note</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2>CRUD with Redux</h2>
      <Link to="/create" className="btn btn-success my-3">
        + Create Note
      </Link>

      {/* All items listing hereby */}
      <div className="note__cards__main">
        {notes.map((items) => (
          <NoteList
            key={items.id}
            id={items.id}
            title={items.title}
            note={items.note}
            timeStamp={items.timeStamp}
            status={items.status}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
