import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/markdown/markdown';

const App = () => {
    const [markdown, setMarkdown] = useState(`# **Summer Project: Overview**\n---\n<br/>\n## Development phase starts 20th June\n1. Abhi = 'Backend' + 'Code to Markdown'\n2. Atharva = 'react'\n3. Devraj = 'Editor'\n4. Pranav and Anushka = 'learning'\n---\n<br/>\n### GitHub Repo: [RazorCollab](https://github.com/iamabhi747/RazorCollab)\n---\n<br/>\n## Detailed Developer Notes\n- [Project Structure](http://example.com)\n- [Frontend UI](http://example.com)\n- [Code to Markdown](http://example.com)\n- [Editor](http://example.com)`);

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
            display: 'flex',
            flexDirection: 'column',
        },
        previewContainer: {
            flex: 1,
            padding: '10px',
            backgroundColor: '#2e2e2e',
            color: 'white',
            overflowY: 'auto',
        },
        header: {
            color: 'white',
        },
        codeMirrorWrapper: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },
        codeMirror: {
            flex: 1,
            height: '100%',
        },
        markdownPreview: {
            backgroundColor: '#2e2e2e',
            color: 'white',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.editorContainer}>
                <h2 style={styles.header}>Markdown Editor</h2>
                <div style={styles.codeMirrorWrapper}>
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
                        style={styles.codeMirror}
                    />
                </div>
            </div>
            <div style={styles.previewContainer}>
                <h2 style={styles.header}>Preview</h2>
                <div style={styles.markdownPreview}>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default App;
