import React from "react";

const CustomFormLabel = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="custom-form-label">
      {label}
    </label>
  );
};

export default CustomFormLabel;
