import React, { useState } from "react";
import { useGetUserReposQuery, User } from "../../../store/slices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface UserProps {
  user: User;
}

const UserItem: React.FC<UserProps> = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const { data: repos, isLoading } = useGetUserReposQuery(user.login, {
    skip: !expanded,
  });

  return (
    <div className="border p-2 mb-2 rounded-md">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left font-semibold text-lg"
      >
        <div className="flex justify-between items-center px-2">
          <span>{user.login} </span>
          {expanded ? (
            <FontAwesomeIcon icon={faChevronUp} className="text-xs font-bold" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
          )}
        </div>
      </button>
      {expanded && (
        <div className="mt-2">
          {isLoading ? (
            <div className="px-4">
              <p className="text-xs">Loading repositories...</p>
            </div>
          ) : (
            repos?.map((repo) => (
              <div
                key={repo.id}
                className="p-4 bg-gray-200 mb-1 rounded-md flex flex-col"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="max-w-[70%] break-words">
                    <p className="text-sm font-bold">{repo.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold">
                      {repo.forks_count}
                    </span>
                    <FontAwesomeIcon icon={faStar} className="text-xs" />
                  </div>
                </div>
                <div>
                  <p className="text-xs">
                    {repo.description || "No description"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserItem;
