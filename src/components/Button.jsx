import React from "react";

export default function Button({ content, onClick = () => {}, className }) {
  return (
    <button className={`button-global ${className}`} onClick={onClick}>
      {content}
    </button>
  );
}
