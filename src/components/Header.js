import React from "react";
import './../index.css';

function Header(){

  const headerStyles = {
    backgroundColor: '#ffef9e',
    paddingTop: '3%',
    paddingLeft: '2%'
  }

  return (
    <div style={headerStyles}>
      <h1>KEG TRACKER V1.0</h1>
    </div>
  );
}

export default Header;