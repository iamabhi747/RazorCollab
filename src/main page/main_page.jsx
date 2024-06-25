import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FaPlus, FaLock, FaUserCircle, FaTrashAlt, FaTags, FaBookmark, FaClock } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import newNote from '../new-note/new-note';
import collaborativeNotes from '../collaborative_notes/collaborative_notes';
import myNote from '../my-notes/my-notes';
import myTrash from '../my-trash/my-trash';

function App() {
    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
        },
        sidebar: {
            width: '250px',
            backgroundColor: '#2e2e2e',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
        },
        sidebarHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
        },
        sidebarSection: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '20px',
        },
        sidebarItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '5px',
            color: '#b1b1b1',
            textDecoration: 'none',
        },
        sidebarItemSelected: {
            backgroundColor: '#3a3a3a',
            color: '#fff',
        },
        sidebarIcon: {
            marginRight: '10px',
        },
        content: {
            flexGrow: 1,
            padding: '20px',
            backgroundColor: '#333',
            color: '#fff',
        },
        workspaceContainer: {
            padding: '20px',
        },
        workspaceHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
        },
        workspaceContent: {
            backgroundColor: '#444',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
        },
        button: {
            backgroundColor: '#28a745',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '10px 2px',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        main: {
            flex: 1,
            backgroundColor: '#444',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
        },
        mainHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            borderBottom: '1px solid #555',
        },
        dropdownButton: {
            backgroundColor: '#333',
            border: '1px solid #555',
            color: '#fff',
            padding: '5px 10px',
            cursor: 'pointer',
        },
        mainContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        welcomeMessage: {
            textAlign: 'center',
        },
        noteIcon: {
            width: '50px',
            height: '50px',
        },
        actionButton: {
            backgroundColor: '#3a3',
            border: 'none',
            color: '#fff',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
        },

    };

    return (
        <Router>
            <div style={styles.container}>
                <div style={styles.sidebar}>
                    <div style={styles.sidebarHeader}>
                        <div>My Workspace</div>
                        <IoMdNotificationsOutline />
                    </div>
                    <div style={styles.sidebarSection}>
                        <Link to="src/new-note/new-note.jsx" style={{ ...styles.sidebarItem, ...styles.sidebarItemSelected }}>
                            <FaPlus style={styles.sidebarIcon} />
                            New note
                        </Link>
                        <Link to="src/my-notes/my-notes.jsx" style={{ ...styles.sidebarItem, ...styles.sidebarItemSelected }}>
                            <FaLock style={styles.sidebarIcon} />
                            My Notes
                        </Link>
                        <Link to="src/collaborative_notes/collaborative_notes.jsx" style={{ ...styles.sidebarItem, ...styles.sidebarItemSelected }}>
                            <FaUserCircle style={styles.sidebarIcon} />
                            Collaborative Notes
                        </Link>
                        <Link to="src/my-trash/my-trash.jsx" style={{ ...styles.sidebarItem, ...styles.sidebarItemSelected }}>
                            <FaTrashAlt style={styles.sidebarIcon} />
                            My trash
                        </Link>
                    </div>
                    <div style={styles.sidebarItem}>
                        <img src="profile.jpg" alt="Atharva Kavade" style={{ borderRadius: '50%', width: '30px', marginRight: '10px' }} />
                        Atharva Kavade
                    </div>
                </div>
                <div style={styles.content}>
                    <Switch>
                        <Route path="src/new-note/new-note.jsx" component={newNote} />
                        <Route path="src/my-notes/my-notes.jsx" component={myNote} />
                        <Route path="src/my-trash/my-trash.jsx" component={myTrash} />
                        <Route path="src/collaborative_notes/collaborative_notes.jsx" component={collaborativeNotes} />
                        <Route path="/" exact>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <h1>Welcome to My Workspace</h1>
                            </div>
                        </Route>
                    </Switch>
                </div>
                {/* Workspace */}
                <div style={styles.main}>
                    <div style={styles.mainHeader}>
                        <button style={styles.dropdownButton}>
                            <FaTags style={styles.sidebarIcon} />
                            Tags
                        </button>
                        <button style={styles.dropdownButton}>Layout</button>
                    </div>
                    <div style={styles.mainContent}>
                        <div style={styles.welcomeMessage}>
                            <img src="note-icon-url" alt="note icon" style={styles.noteIcon} />
                            <p>Start writing and share your thoughts with a note!</p>
                            <button style={styles.actionButton}>Create new note</button>
                            <button style={styles.actionButton}>Tutorials Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
