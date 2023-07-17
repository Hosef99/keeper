import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import NoteList from '../component/NoteList';
import FloatingActionButton from '../component/FloatingActionButton';

function Home() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <Header />
      <NoteList notes={notes} />
      <FloatingActionButton addNote={addNote} />
      <Footer />
    </>
  );
}

export default Home;
