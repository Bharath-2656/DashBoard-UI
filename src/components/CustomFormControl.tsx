import React from "react";

interface CustomFormControlProps {
  children: React.ReactNode;
  error?: string;
}

const CustomFormControl: React.FC<CustomFormControlProps> = ({
  children,
  error,
}) => {
  return (
    <div style={{ marginBottom: "4%" }}>
      {children}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default CustomFormControl;
