import React from "react";

export default {
  Input: ({ onChange = () => {}, type = "text", value }) => {
    return (
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="input-form"
      />
    );
  },
  InputSearch: () => {
    return <input type="text" />;
  },
};
