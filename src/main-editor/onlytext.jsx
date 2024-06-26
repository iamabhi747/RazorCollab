import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/markdown/markdown';

const App = () => {
    const [markdown, setMarkdown] = useState('# Summer Project: Overview\n\nDevelopment phase starts 20th June\n\n1. Abhi = `Backend` + `Code to Markdown`\n2. Atharva = `react`\n3. Devraj = `Editor`\n4. Pranav and Anushka = `learning`\n\nGitHub Repo: [RazorCollab](#)\n\nDetailed Developer Notes');

    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#2e2e2e',
            color: 'white',
        },
        editorContainer: {
            flex: 1,
            padding: '10px',
        },
        previewContainer: {
            flex: 1,
            padding: '10px',
            backgroundColor: '#2e2e2e',
            color: 'white',
        },
        header: {
            color: 'white',
        },
        codeMirror: {
            height: 'calc(100vh - 40px)',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        codeMirrorScroll: {
            backgroundColor: '#1e1e1e',
            color: 'white',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.editorContainer}>
                <h2 style={styles.header}>Markdown Editor</h2>
                <CodeMirror
                    value={markdown}
                    options={{
                        mode: 'markdown',
                        theme: 'material-darker',
                        lineNumbers: true
                    }}
                    onBeforeChange={(editor, data, value) => {
                        setMarkdown(value);
                    }}
                />
            </div>
            <div style={styles.previewContainer}>
                <h2 style={styles.header}>Preview</h2>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default App;
