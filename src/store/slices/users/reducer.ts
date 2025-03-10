import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  searchQuery: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  searchQuery: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset(): any {
      return initialState;
    },
    fetchUsersRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    fetchUsersSuccess: (
      state,
      action: PayloadAction<{ users: User[]; searchQuery: string }>
    ) => {
      state.loading = false;
      state.users = action.payload.users;
      state.searchQuery = action.payload.searchQuery;
      state.error = null;
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  reset,
} = userSlice.actions;
export const { reducer, actions } = userSlice;
