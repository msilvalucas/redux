import React from "react";
import helpLinks from "./../helpLink.json";

export const ButtonHelp = ({ category, article }) => {
  const helpItem = helpLinks.find(
    (item) => item.category === category && item.article === article
  );

  if (!helpItem) {
    return null;
  }

  return (
    <a
      href={helpItem.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "8px 12px",
        backgroundColor: "#0077cc",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
      }}
    >
      🔍 Ajuda
    </a>
  );
};

export default ButtonHelp;
