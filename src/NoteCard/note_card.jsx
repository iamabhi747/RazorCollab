import React from 'react';
import { FaThumbtack, FaClock, FaBookmark } from 'react-icons/fa';

function NoteCard() {
    const styles = {
        card: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            width: '200px',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
        },
        title: {
            marginLeft: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333',
        },
        body: {
            fontSize: '14px',
            color: '#666',
            marginBottom: '8px',
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            color: '#aaa',
        },
    };

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <FaThumbtack />
                <span style={styles.title}>Title</span>
            </div>
            <div style={styles.body}>
                <FaClock /> changed in a few seconds
            </div>
            <div style={styles.footer}>
                <FaBookmark />
                <div style={{ cursor: 'pointer' }}>⋮</div>
            </div>
        </div>
    );
}

export default NoteCard;
