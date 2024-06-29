import React from 'react';

function NewNote() {
    const styles = {
        pageWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#333',
        }
    };

    return (
        <div className='PageWraper' style={styles.pageWrapper}>
            <div className='FormWraper'>
                <form>
                    <h1>Create a new note</h1>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' name='title' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <textarea id='content' name='content'></textarea>
                    </div>
                    <button type='submit'>Create</button>
                </form>

            </div>
        </div>
    );



}
export default NewNote;