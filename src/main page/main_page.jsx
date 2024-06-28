import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { FaPlus, FaLock, FaUserCircle, FaTrashAlt, FaTags } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import NewNote from '../new-note/new-note';
import CollaborativeNotes from '../collaborative_notes/collaborative_notes';
import MyNote from '../my-notes/my-notes';
import MyTrash from '../my-trash/my-trash';

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
            backgroundColor: '#28a745',
            border: 'none',
            color: '#fff',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius: '4px',
        },
        profileImage: {
            borderRadius: '50%',
            width: '30px',
            marginRight: '10px',
        }
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
                        <NavLink to="/new-note" style={({ isActive }) => ({ ...styles.sidebarItem, ...(isActive ? styles.sidebarItemSelected : {}) })}>
                            <FaPlus style={styles.sidebarIcon} />
                            New Note
                        </NavLink>
                        <NavLink to="/my-notes" style={({ isActive }) => ({ ...styles.sidebarItem, ...(isActive ? styles.sidebarItemSelected : {}) })}>
                            <FaLock style={styles.sidebarIcon} />
                            My Notes
                        </NavLink>
                        <NavLink to="/collaborative-notes" style={({ isActive }) => ({ ...styles.sidebarItem, ...(isActive ? styles.sidebarItemSelected : {}) })}>
                            <FaUserCircle style={styles.sidebarIcon} />
                            Collaborative Notes
                        </NavLink>
                        <NavLink to="/my-trash" style={({ isActive }) => ({ ...styles.sidebarItem, ...(isActive ? styles.sidebarItemSelected : {}) })}>
                            <FaTrashAlt style={styles.sidebarIcon} />
                            My Trash
                        </NavLink>
                    </div>
                    <div style={styles.sidebarItem}>
                        <img src="profile.jpg" alt="Atharva Kavade" style={styles.profileImage} />
                        Atharva Kavade
                    </div>
                </div>
                <div style={styles.content}>
                    <Routes>
                        <Route path="/new-note" element={<NewNote />} />
                        <Route path="/my-notes" element={<MyNote />} />
                        <Route path="/my-trash" element={<MyTrash />} />
                        <Route path="/collaborative-notes" element={<CollaborativeNotes />} />
                        <Route path="/" element={
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <h1>Welcome to My Workspace</h1>
                            </div>
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
