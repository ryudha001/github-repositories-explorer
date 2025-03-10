import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  User,
} from "./slices/users/reducer";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

interface GithubApiResponse {
  items: User[];
}

function* fetchUsersSaga(action: PayloadAction<string>) {
  const githubUrl = process.env.REACT_APP_GITHUB_BASE_URL;
  const limit = process.env.REACT_APP_LIMIT_PER_PAGE;

  try {
    const response: { data: GithubApiResponse } = yield call(
      axios.get,
      `${githubUrl}/search/users?q=${action.payload}&per_page=${limit}`
    );
    yield put(
      fetchUsersSuccess({
        users: response.data.items,
        searchQuery: action.payload,
      })
    );
  } catch (error) {
    yield put(fetchUsersFailure((error as Error).message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
