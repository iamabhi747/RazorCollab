import React, { useState } from 'react';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app">
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="user-info">
                    <img src="https://example.com/user-avatar.png" alt="User Avatar" />
                    <span>Atharva Kavade</span>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <a href="#">
                            <i className="fas fa-home"></i>
                            <span>My Workspace</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-file-alt"></i>
                            <span>My Notes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-users"></i>
                            <span>Collaborative Notes</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fas fa-clock"></i>
                            <span>Recent</span>
                        </a>
                    </li>
                </ul>
                <button className="toggle-sidebar" onClick={toggleSidebar}>
                    <i className={`fas ${isSidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
                </button>
            </div>
            <div className="content">
                <div className="header">
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search keyword or tag..." />
                    </div>
                    <div className="options">
                        <button className="new-note" onClick={() => alert('Create new note')}>
                            <i className="fas fa-plus"></i>
                            <span>New note</span>
                        </button>
                        <div className="dropdown">
                            <button className="dropdown-toggle">
                                <i className="fas fa-tags"></i>
                                <span>Tags</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Tag 1</a>
                                </li>
                                <li>
                                    <a href="#">Tag 2</a>
                                </li>
                                <li>
                                    <a href="#">Tag 3</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-toggle">
                                <i className="fas fa-th-large"></i>
                                <span>Layout</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Layout 1</a>
                                </li>
                                <li>
                                    <a href="#">Layout 2</a>
                                </li>
                                <li>
                                    <a href="#">Layout 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="note-container">
                        <div className="note-header">
                            <i className="fas fa-pencil-alt"></i>

                        </div>
                        <div className="note-actions">
                            <button className="create-new-note" onClick={() => alert('Create new note')}>
                                Create new note
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
