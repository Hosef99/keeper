import React, { useState } from "react";

function FloatingActionButton({ addNote }) {
	const [expanded, setExpanded] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleButtonClick = () => {
		setExpanded(!expanded);
	};

	const handleCollapse = () => {
		setExpanded(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.trim() !== "" || content.trim() !== "") {
			const newNote = {
				id: Date.now(),
				title,
				content,
			};
			addNote(newNote);
			setTitle("");
			setContent("");
		}
		setExpanded(false);
	};

	return (
		<div className="floating-action-button">
			{!expanded && (
				<button onClick={handleButtonClick} className="expand-button">
					+
				</button>
			)}
			{expanded && (
				<form onSubmit={handleSubmit} className="note-form">
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter note title"
					/>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="Enter note content"
					></textarea>
					<div className="buttons">
						<button type="submit">Add Note</button>
						<button
							onClick={handleCollapse}
							className="collapse-button"
						>
							Cancel
						</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default FloatingActionButton;
