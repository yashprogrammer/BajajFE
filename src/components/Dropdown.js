import React from "react";
import Select from "react-select";

const Dropdown = ({ options, setSelectedOptions }) => {
  return (
    <div className="p-4">
      <label className="block mb-2">Select Data to Display:</label>
      <Select
        isMulti
        options={options}
        onChange={setSelectedOptions}
        className="text-black"
      />
    </div>
  );
};

export default Dropdown;
