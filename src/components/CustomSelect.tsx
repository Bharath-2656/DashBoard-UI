import React from "react";

const CustomSelect = ({ options, value, onChange, placeholder }) => {
  return (
    <select className="custom-select" value={value} onChange={onChange}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
