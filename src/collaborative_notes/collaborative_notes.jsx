import React from 'react';
import { FaPlus, FaTrashAlt, FaLock, FaTags, FaBookmark, FaClock, FaUserCircle } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';

function collaborativeNotes() {
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
            marginBottom: '10px',
        },
        sidebarSection: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '20px',
        },
        sidebarItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '5px',
            color: '#b1b1b1',
        },
        sidebarItemSelected: {
            backgroundColor: '#3a3a3a',
            color: '#fff',
        },
        sidebarIcon: {
            marginRight: '10px',
        },
        main: {
            flexGrow: 1,
            backgroundColor: '#3a3a3a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            position: 'relative',
        },
        topbar: {
            position: 'absolute',
            top: '10px',
            width: 'calc(100% - 250px)',
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '20px',
        },
        topbarButton: {
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '16px',
            marginLeft: '20px',
            cursor: 'pointer',
        },
        emptyState: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        emptyStateIcon: {
            fontSize: '50px',
            marginBottom: '10px',
        },
        emptyStateText: {
            fontSize: '18px',
            color: '#bbb',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <div style={styles.sidebarHeader}>
                    <div>My Workspace</div>
                    <IoMdNotificationsOutline />
                </div>
                <div style={styles.sidebarSection}>
                    <div style={{ ...styles.sidebarItem, ...styles.sidebarItemSelected }}>
                        <FaPlus style={styles.sidebarIcon} />
                        New note
                    </div>
                    <div style={styles.sidebarItem}>
                        <FaLock style={styles.sidebarIcon} />
                        My Notes
                    </div>
                    <div style={styles.sidebarItem}>
                        <FaUserCircle style={styles.sidebarIcon} />
                        Collaborative Notes
                    </div>
                    <div style={styles.sidebarItem}>
                        <FaTrashAlt style={styles.sidebarIcon} />
                        My trash
                    </div>
                    <div style={styles.sidebarItem}>
                        Upgrade to Prime Plan
                    </div>
                </div>
                <div style={styles.sidebarSection}>
                    <div style={styles.sidebarItem}>
                        <FaTags style={styles.sidebarIcon} />
                        Tags
                    </div>
                    <div style={styles.sidebarItem}>
                        <FaBookmark style={styles.sidebarIcon} />
                        Bookmark
                    </div>
                    <div style={styles.sidebarItem}>
                        <FaClock style={styles.sidebarIcon} />
                        Recent
                    </div>
                </div>
            </div>
            <div style={styles.main}>
                <div style={styles.topbar}>
                    <button style={styles.topbarButton}>All</button>
                    <button style={styles.topbarButton}>Invited me</button>
                    <button style={styles.topbarButton}>Participated</button>
                    <BsThreeDotsVertical style={{ marginLeft: 'auto', cursor: 'pointer' }} />
                </div>
                <div style={styles.emptyState}>
                    <FaSearch style={styles.emptyStateIcon} />
                    <div style={styles.emptyStateText}>No notes</div>
                </div>
            </div>
        </div>
    );
}

export default collaborativeNotes;
