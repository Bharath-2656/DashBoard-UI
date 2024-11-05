import React from "react";

interface CustomFormLabelProps {
  label: string;
  htmlFor: string;
}

const CustomFormLabel: React.FC<CustomFormLabelProps> = ({
  label,
  htmlFor,
}) => {
  return (
    <label htmlFor={htmlFor} className="custom-form-label">
      {label}
    </label>
  );
};

export default CustomFormLabel;
