import React from "react";
import './../index.css';

function Header(){

  const headerStyles = {
    backgroundColor: '#ffef9e',
    paddingTop: '1%',
    paddingBottom: '1%',
    textAlign: 'center',
    marginBottom: '2%'
  }

  return (
    <div style={headerStyles}>
      <h1>KEG TRACKER V1.0</h1>
    </div>
  );
}

export default Header;