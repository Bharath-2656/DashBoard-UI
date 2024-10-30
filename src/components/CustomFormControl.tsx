import React from "react";

const CustomFormControl = ({ children, error, isRequired = false }) => {
  return (
    <div style={{ marginBottom: "4%" }}>
      {children}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default CustomFormControl;
