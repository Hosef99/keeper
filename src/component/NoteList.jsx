import React from "react";
import Note from "./Note";

function NoteList({ notes }) {
	console.log(notes);
	return (
		<div>
			{notes.map((note) => (
				<Note id={note.id} title={note.title} content={note.content} />
			))}
		</div>
	);
}

export default NoteList;
