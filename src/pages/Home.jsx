import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import NoteList from "../component/NoteList";

function Home() {
    let notes = [{
        id: 0,
        title: "Pack stuff",
        content: "Going to go back at 5 and drive back home safely."
    },{
        id: 1,
        title: "Go back home",
        content: "Maybe I should finish this app before I go back to home..."
    }]

	return (
		<>
			<Header />
            <NoteList notes={notes} />
			<Footer />
		</>
	);
}

export default Home;