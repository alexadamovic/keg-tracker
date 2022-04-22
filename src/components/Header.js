import React from "react";
import './../index.css';

function Header(){

  const headerStyles = {
    fontFamily: 'Bebas Neue',
    textIndent: '3rem',
    letterSpacing: '3rem',
    backgroundColor: '#ffef9e',
    paddingTop: '2%',
    paddingBottom: '1%',
    textAlign: 'center',
    marginBottom: '2%'
  }

  return (
    <div style={headerStyles}>
      <h1>TAPPER</h1>
    </div>
  );
}

export default Header;