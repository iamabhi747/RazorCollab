import React from 'react';
import { FaBell, FaSearch, FaPlus, FaTrash, FaTags, FaBookmark, FaClock, FaUser, FaQuestionCircle, FaLock, FaUsers } from 'react-icons/fa';

function App() {
    const styles = {
        app: {
            display: 'flex',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
            margin: 0,
        },
        sidebar: {
            width: '250px',
            backgroundColor: '#333',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
        },
        sidebarHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '10px',
            borderBottom: '1px solid #444',
        },
        profile: {
            display: 'flex',
            alignItems: 'center',
        },
        profileIcon: {
            marginRight: '5px',
        },
        notificationIcon: {
            color: '#f00',
        },
        searchBar: {
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0',
        },
        searchIcon: {
            marginRight: '5px',
        },
        searchInput: {
            width: '100%',
            padding: '5px',
            backgroundColor: '#444',
            border: 'none',
            color: '#fff',
        },
        newNoteButton: {
            backgroundColor: '#3a3',
            border: 'none',
            color: '#fff',
            padding: '10px',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        },
        plusIcon: {
            marginRight: '5px',
        },
        usersIcon: {
            marginRight: '5px',
        },
        lockIcon: {
            marginRight: '5px',
        },
        menu: {
            listStyleType: 'none',
            padding: 0,
        },
        menuItem: {
            padding: '10px 0',
            display: 'flex',
            alignItems: 'center',
        },
        menuIcon: {
            marginRight: '10px',
        },
        upgrade: {
            color: '#0f0',
        },
        tagsSection: {
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0',
        },
        tagsIcon: {
            marginRight: '10px',
        },
        userSection: {
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
        },
        profilePic: {
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            marginRight: '10px',
        },
        questionIcon: {
            marginLeft: 'auto',
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
        <div style={styles.app}>
            <div style={styles.sidebar}>
                <div style={styles.sidebarHeader}>
                    <div style={styles.profile}>
                        <FaUser style={styles.profileIcon} />
                        <span>My Workspace</span>
                    </div>
                    <FaBell style={styles.notificationIcon} />
                </div>
                <div style={styles.searchBar}>
                    <FaSearch style={styles.searchIcon} />
                    <input type="text" placeholder="Search keyword or tag..." style={styles.searchInput} />
                </div>
                <button style={styles.newNoteButton}>
                    <FaPlus style={styles.plusIcon} />
                    New note
                </button>
                <ul style={styles.menu}>
                    <li style={styles.menuItem}>
                        <FaLock style={styles.lockIcon} />
                        My Notes
                    </li>
                    <li style={styles.menuItem}>
                        <FaUsers style={styles.usersIcon} />
                        Collaborative Notes
                    </li>
                    <li style={styles.menuItem}>
                        <FaTrash style={styles.menuIcon} />
                        My trash
                    </li>
                    <li style={styles.menuItem}>
                        <FaBookmark style={styles.menuIcon} />
                        Bookmark
                    </li>
                    <li style={styles.menuItem}>
                        <FaClock style={styles.menuIcon} />
                        Recent
                    </li>
                </ul>
                <div style={styles.userSection}>
                    <img src="profile-pic-url" alt="profile" style={styles.profilePic} />
                    <span>Atharva Kavade</span>
                    <FaQuestionCircle style={styles.questionIcon} />
                </div>
            </div>
            <div style={styles.main}>
                <div style={styles.mainHeader}>
                    <button style={styles.dropdownButton}>Tags</button>
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
    );
}

export default App;
