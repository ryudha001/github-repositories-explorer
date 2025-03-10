import React from "react";

import UsersRepositoriesSearch from "../features/user-repositories/components/UsersRepositoriesSearch";
import UserList from "../features/user-repositories/components/UserList";

const UsersRepositories: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">GitHub Repositories Explorer</h1>
      <UsersRepositoriesSearch />
      <UserList />
    </div>
  );
};

export default UsersRepositories;
