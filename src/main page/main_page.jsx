import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const handleNewNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const addNote = () => {
        setNotes([...notes, { id: Date.now(), content: newNote }]);
        setNewNote('');
    };

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#222', color: '#fff', fontFamily: 'ans-serif' }}>
            <div style={{ width: 250, padding: 20, backgroundColor: '#333' }}>
                <h1 style={{ marginBottom: 10 }}>My Workspace</h1>
                <input type="text" placeholder="Search keyword or tag..." style={{ width: '100%', padding: 10, marginBottom: 20 }} />
                <button onClick={addNote} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: 10, borderRadius: 5, cursor: 'pointer' }}>
                    New note
                </button>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li>My Notes</li>
                    <li>Collaborative Notes</li>
                    <li>My trash</li>
                    <li>Tags</li>
                    <li>Bookmark</li>
                    <li>Recent</li>
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                    <img src="https://via.placeholder.com/50" alt="User" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                    <span style={{ marginLeft: 10 }}>Atharva Kavade</span>
                </div>
            </div>
            <div style={{ flex: 1, padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'pace-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="tags" style={{ marginRight: 10 }}>Tags</label>
                        <select id="tags" style={{ padding: 10, borderRadius: 5 }}>
                            <option value="">All</option>
                            {/* Add your tags here */}
                        </select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="layout" style={{ marginRight: 10 }}>Layout</label>
                        <select id="layout" style={{ padding: 10, borderRadius: 5 }}>
                            <option value="">Default</option>
                            {/* Add your layout options here */}
                        </select>
                    </div>
                </div>
                <div>
                    <h2 style={{ marginBottom: 20 }}>Start writing and share your thoughts with a note!</h2>
                    <button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: 10, borderRadius: 5, cursor: 'pointer', marginRight: 10 }}>
                        Create new note
                    </button>
                    <button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: 10, borderRadius: 5, cursor: 'pointer' }}>
                        Tutorials Book
                    </button>
                    {/* Display your notes here */}
                </div>
            </div>
        </div>
    );
}

export default App;