import React from 'react';
import NoteAdd from './NoteAdd';

function Header({ addNote }) {
  const headerStyle = {
    backgroundColor: '#f5ba13',
    margin: 'auto -16px',
    padding: '16px 32px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'McLaren, cursive',
    fontWeight: 200,
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>Keeper</h1>
    </header>
  );
}

export default Header;
