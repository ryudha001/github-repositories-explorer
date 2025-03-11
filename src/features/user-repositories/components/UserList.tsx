import React from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import { RootState } from "../../../store";

const UserList: React.FC = () => {
  const { users, error, searchQuery } = useSelector(
    (state: RootState) => state.users
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {users.length > 0 && searchQuery && (
        <div className="mb-2 text-sm px-1">
          <span>{`Showing Users for "${searchQuery}"`}</span>
        </div>
      )}

      {users?.map((user: any) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
