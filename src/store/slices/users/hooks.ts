import { useDispatch } from "react-redux";

import { actions } from "./reducer";

interface UseUsersResult {
  resetUsers: Function;
}

export const useUsers = (): UseUsersResult => {
  const dispatch = useDispatch();

  const resetUsers = () => {
    dispatch(actions.reset());
  };

  return {
    resetUsers,
  };
};
