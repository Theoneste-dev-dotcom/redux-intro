import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/users";
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
try {
  const response = await axios.get(baseUrl);
  return response.data;
}catch(error) {
  return error.message
}
});


const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      console.log(action.error.message);
      
    })

  }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
