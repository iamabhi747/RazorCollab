import React, { useState } from 'react';
import Avatar from 'react-avatar';

function EditorPage() {
    const [clients, setClients] = useState([{ id: 1, name: 'Atharva Kavade' }
        , { id: 2, name: 'Devraj Lokhande' }
        , { id: 3, name: 'Abhinandan Bhuse' },
    ]);
    const styles = {
        mainWrap: {
            display: 'flex',
            height: '100vh',
        },
        aside: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            width: '250px',
        },
        asideinner: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            logo: {
                marginBottom: '20px',
            },
            clientlist: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            client: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
            },
            buttonGroup: {
                outline: 'none',
                border: 'none',
                backgroundColor: '#4aed88',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginLeft: '10px',
                marginTop: '10px',

            },
            editor: {
                flex: 1,
                padding: '20px',
            },
        }
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
                <button style={styles.buttonGroup}>Home</button>
                <button style={styles.buttonGroup}>New Note</button>

            </div>
            <div style={styles.editor}>
                editor goes here...
            </div>
        </div>
    );

};
export default EditorPage;