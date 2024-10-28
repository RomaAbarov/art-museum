import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "./types";
import { SortBy } from "@/shared/consts";

const initialState: IFilter = {
  searchValue: "",
  page: 1,
  sortBy: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectCurrentPage: (state) => state.page,
    selectSearchValue: (state) => state.searchValue,
    selectSortBy: (state) => state.sortBy,
  },
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      if (action.payload === SortBy.Default) {
        state.sortBy = "";
        return;
      }

      state.sortBy = action.payload;
    },
  },
});

export const { setPage, setSearchValue, setSortBy } = filterSlice.actions;
export const { selectCurrentPage, selectSearchValue, selectSortBy } =
  filterSlice.selectors;

export default filterSlice.reducer;
