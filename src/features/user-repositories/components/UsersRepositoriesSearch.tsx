import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../../../store/slices";
import { RootState, useSelector } from "../../../store";
import SearchBar from "../../../components/SearchBar";
import Button from "../../../components/Button";

const UsersRepositoriesSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.users);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(usersActions.fetchUsersRequest(searchQuery));
    }
  };

  const handleOnChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="mb-4">
      <SearchBar value={searchQuery} onChange={handleOnChange} />
      <Button onClick={handleSearch} isLoading={loading}>
        Search
      </Button>
    </div>
  );
};

export default UsersRepositoriesSearch;
