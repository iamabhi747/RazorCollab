import React from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

function CollaborativeNotes() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            width: '100%',
            height: '100%',
            backgroundColor: '#3a3a3a',
        },
        topbar: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '10px 20px',
            borderBottom: '1px solid #555',
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
            marginTop: '20px',
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
    );
}

export default CollaborativeNotes;
