import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <h1 className="title" style={{ textAlign: "center" }}>
        {title}
      </h1>
    </>
  );
};

export default Header;
