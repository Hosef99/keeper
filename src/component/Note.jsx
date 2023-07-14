import React from 'react';

function Note({ id, title, content }) {
  return (
    <div className="note" key={id}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Note;