import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000/ballots";

const initialState = {
  categories: [],
  isLoading: false,
  error: false,
  selectionNominees: [],
  isModalOpen: false,
};

export const fetchBallot = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const ballotSlice = createSlice({
  name: "ballot",
  initialState,
  reducers: {
    selectNominee: (state, action) => {
      const { categoryId, nomineeId, name, img } = action.payload;

      const existingItem = state.selectionNominees.find(
        (item) => item.categoryId === categoryId
      );

      if (!existingItem) {
        state.selectionNominees.push({ categoryId, nomineeId, name, img });
      } else {
        existingItem.nomineeId = nomineeId;
        existingItem.name = name;
        existingItem.img = img;
      }
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBallot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBallot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(fetchBallot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectNominee, openModal, closeModal } = ballotSlice.actions;

export default ballotSlice.reducer;
