import React, { FC } from "react";

import Input from "../Input";

type SearchBarProps = {
  setSearchableValue: React.Dispatch<React.SetStateAction<string>>;
  searchableValue: string;
};

const SearchBar: FC<SearchBarProps> = ({
  setSearchableValue,
  searchableValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchableValue(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Enter jar address..."
        value={searchableValue}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
