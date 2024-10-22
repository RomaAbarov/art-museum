import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilter {
  searchValue: string;
  page: number;
}

const initialState: IFilter = {
  searchValue: "",
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectCurrentPage: (state) => state.page,
    selectSearchValue: (state) => state.searchValue,
  },
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setPage, setSearchValue } = filterSlice.actions;
export const { selectCurrentPage, selectSearchValue } = filterSlice.selectors;

export default filterSlice.reducer;
