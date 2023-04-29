import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {},
  reducers: {
    getToken: (state, action) => {
        return {
            ...state,
            state:action.payload
        }
    },
  },
});

export const { getToken } = authSlice.actions;
export default authSlice.reducer;
