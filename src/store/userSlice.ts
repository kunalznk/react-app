import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../static/constants";

const userSlice = createSlice({
  name: CONSTANTS.ENTITIES.USER,
  initialState: {
    username: "",
  },
  reducers: {
    Register: (state, action) => {
      state.username = action.payload;
    },

    Login: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default userSlice.reducer;
