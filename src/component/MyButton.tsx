import React from "react";
import "../style/MyButton.css";

interface mainProps {
  children: string;
}

export const MyButton: React.FC<mainProps> = ({ children }) => {
  return <div className="buttonStyle">{children}</div>;
};
