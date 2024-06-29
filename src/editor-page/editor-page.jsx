import React, { useState } from 'react';
import Avatar from 'react-avatar';

function EditorPage() {
    const [clients, setClients] = useState([{ id: 1, name: 'Atharva Kavade' }
        , { id: 2, name: 'Devraj Lokhande' }
        , { id: 3, name: 'Abhinandan Bhuse' }
    ]);
    const styles = {
        mainWrap: {
            display: 'flex',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
        },
        aside: {
            width: '250px',
            backgroundColor: '#2e2e2e',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
        },
        asideinner: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
        },
        editor: {
            flexGrow: 1,
            padding: '20px',
            backgroundColor: '#333',
            color: '#fff',
        },
        logo: {
            fontSize: '1.5em',
            margin: '0',
            fontcolor: '#4aed88',
        },
    };
    return (
        <div style={styles.mainWrap}>
            <div style={styles.aside}>
                <div style={styles.asideinner}>
                    <div>
                        <h1 style={styles.logo}>RazorCollab</h1>
                    </div>
                    <h3>Online People</h3>
                    <div style={styles.clientlist}>
                        {clients.map((client) => {

                            return <div key={client.id} style={styles.client}>
                                <Avatar name={client.name} size="30" round={true} />
                                <span>{client.name}</span>
                            </div>
                        })}

                    </div>

                </div>
                <button></button>
            </div>
            <div style={styles.editor}>
                editor goes here...
            </div>
        </div>
    );

};
export default EditorPage;