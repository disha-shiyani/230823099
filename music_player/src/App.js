import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MusicPlayerCard from './MusicPlayerCard';
import MusicListPage from './MusicListPage';
import MusicList from './MusicList';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MusicPlayerCard />} />
                <Route path="/music-list" element={<MusicListPage />} />
                <Route path="/music-playlist" element={<MusicList />} />
            </Routes>
        </div>
    );
}

export default App;
