
const { createSlice } = require("@reduxjs/toolkit");

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, title, note, status } = action.payload;
      // eslint-disable-next-line
      const un = state.find((item) => item.id == id);
      if (un) {
        un.title = title;
        un.note = note;
        un.status = status;
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      // eslint-disable-next-line
      const un = state.find((item) => item.id == id);
      if (un) {
        // eslint-disable-next-line
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addNote, updateUser, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
