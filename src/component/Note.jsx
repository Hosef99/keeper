import React from "react";

function Note({ id, title, content, handleDeleteNote}) {

    const handleDelete = () => {
        handleDeleteNote(id);
    }

	return (
		<div className="note" key={id}>
			<button onClick={handleDelete}>✕</button>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}

export default Note;
