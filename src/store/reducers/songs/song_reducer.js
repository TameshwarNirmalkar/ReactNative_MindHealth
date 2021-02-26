import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongsAPI } from "./service";

const songInitialState = {
  isLoading: false,
  error: null,
  songList: []
};


const setOnFailure = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
}

export const fetchSongs = createAsyncThunk("SONGS",
  async (arg, { dispatch }) => {
    try {
      dispatch(startStopLoadingAction(true));
      const res = await getSongsAPI(arg);
      dispatch(getSongsListAction(res.results));
    } catch (err) {
      dispatch(setOnFailure(err.toString()));
    } finally {
      dispatch(startStopLoadingAction(false));
    }
  }
);


export const songsSlice = createSlice({
  name: "SONGS",
  initialState: songInitialState,
  reducers: {
    startStopLoadingAction: (state, { payload }) => {state.isLoading = payload},
    setOnFailureAction: setOnFailure,
    getSongsListAction: (state, { payload }) => {
      state.songList = payload
    },
  },
});

export const {
  startStopLoadingAction,
  setOnFailureAction,
  getSongsListAction,
} = songsSlice.actions;

export default songsSlice.reducer;
