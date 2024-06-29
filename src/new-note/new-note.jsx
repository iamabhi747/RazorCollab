import React from 'react';

function NewNote() {
    const styles = {
        pageWrapper: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#333',
        },
        formWrapper: {
            width: '400px',
            maxWidth: '90%',
            padding: '20px',
            backgroundColor: '#444',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },

        mainLabel: {
            marginBottom: '20px',
        },
        idGroup: {
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
        },
        titleGroup: {
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
        },
        inputGroup: {
            padding: '7px',
            borderRadius: '5px',
            outline: 'none',
            border: 'none',
            backgroundColor: '#eee',
            fontWeight: 'bold',

        },
        buttonGroup: {
            padding: '10px',
            borderRadius: '5px',
            outline: 'none',
            border: 'none',
            backgroundColor: '#4aed88',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginLeft: '10px',
        },

    };

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.formWrapper}>
                <form>
                    <div>
                        <h1>Create a new note</h1>
                    </div>

                    <div style={styles.idGroup}>
                        <input type='text' id='id' name='id' placeholder='ID' style={styles.inputGroup} />
                    </div>
                    <div style={styles.titleGroup}>
                        <input type='text' id='title' name='title' placeholder='Title' style={styles.inputGroup} />
                    </div>


                    <button type='submit' style={styles.buttonGroup}>Create</button>
                    <button type='submit' style={styles.buttonGroup}> New ID</button>
                </form>


            </div>
        </div>
    );



}
export default NewNote;