import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import NoteList from "../component/NoteList";
import FloatingActionButton from "../component/FloatingActionButton";

function Home() {
	const [notes, setNotes] = useState([]);

	const addNote = (newNote) => {
		setNotes([...notes, newNote]);
	};

	const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    };

	return (
		<>
			<Header />
			<NoteList notes={notes} handleDeleteNote={handleDeleteNote} />
			<FloatingActionButton addNote={addNote} />
			<Footer />
		</>
	);
}

export default Home;
