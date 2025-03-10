import React from "react";

interface SearchBarProps {
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  value?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  placeholder,
  className,
  value = "",
}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 w-full rounded-md bg-gray-100"
        placeholder={placeholder ? placeholder : "Search GitHub users..."}
      />
    </div>
  );
};

export default SearchBar;
