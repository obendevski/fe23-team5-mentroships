import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Comments } from './components/Comments';
import { Posts } from './components/Posts';
import { Albums } from './components/Albums';

function App() {
  const [view, setView] = useState<'posts' | 'albums' | 'comments'>();

  return (
    <div className="App">
      <div className="buttons-container">
        <Button title="Albums" onClick={() => setView('albums')} />
        <Button title="Posts" onClick={() => setView('posts')} />
        <Button title="Comments" onClick={() => setView('comments')} />
      </div>
      <div className="container">
        {view === 'posts' ? <Posts /> : null}
        {view === 'albums' ? <Albums /> : null}
        {view === 'comments' ? <Comments /> : null}
      </div>
    </div>
  );
}

export default App;
