import React from "react";

export default function Button(props) {
  const { onClick, type, className, children } = props;

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
