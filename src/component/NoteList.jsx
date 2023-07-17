import React from "react";
import Note from "./Note";

function NoteList({ notes }) {
	console.log(notes);
	return (
		<div>
			{notes.map((note) => (
				<Note key={note.id} {...note} />
			))}
		</div>
	);
}

export default NoteList;
