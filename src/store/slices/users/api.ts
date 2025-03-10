import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Repository {
  [key: string]: any;
}

const githubUrl = process.env.REACT_APP_GITHUB_BASE_URL;

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${githubUrl}/` }),
  endpoints: (builder) => ({
    getUserRepos: builder.query<Repository[], string>({
      query: (username) => `users/${username}/repos`,
    }),
  }),
});

export const { useGetUserReposQuery } = githubApi;
