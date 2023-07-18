import React from "react";
import Note from "./Note";

function NoteList({ notes, handleDeleteNote}) {
	return (
		<div>
			{notes.map((note) => (
				<Note key={note.id} {...note} handleDeleteNote={handleDeleteNote}/>
			))}
		</div>
	);
}

export default NoteList;
