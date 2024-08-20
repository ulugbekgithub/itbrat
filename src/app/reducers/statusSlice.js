// statusSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../api/baseUrl";

// Thunk to update the status via the API
export const updateUserStatus = createAsyncThunk(
  "status/updateUserStatus",
  async ({ userId, status }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${baseURL}/user/profile/`,{status}, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          console.log(response.data);
          
          return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const statusSlice = createSlice({
  name: "status",
  initialState: {
    status: {},
    loading: false,
    error: null,
  },
  reducers: {
    setLocalStatus(state, action) {
      const { userId, status } = action.payload;
      state.status[userId] = status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.status[action.meta.arg.userId] = action.meta.arg.status;
      })
      .addCase(updateUserStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLocalStatus } = statusSlice.actions;
export default statusSlice.reducer;
