export {
  actions as usersActions,
  reducer as usersReducer,
  userSlice,
} from "./users/reducer";

export type { User } from "./users/reducer";

export { useGetUserReposQuery, githubApi } from "./users/api";
