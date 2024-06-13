//music list for main page.
import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import image1 from './images/img3.jpg'; // Import image for small card 1
import image2 from './images/img2.jpg'; // Import image for small card 2
import image3 from './images/img3.jpg'; // Import image for small card 3
import image4 from './images/img4.jpg'; // Import image for small card 4
import image5 from './images/img5.jpg'; // Import image for small card 5
import song1 from './audio/song1.mp3';
import song2 from './audio/song2.mp3';
import song3 from './audio/song3.mp3';
import song4 from './audio/song4.mp3';
import song5 from './audio/song5.mp3';

const MusicListPage = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio());

    const musicList = [
        { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:30', image: image1, mp3: song1 },
        { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:15', image: image2, mp3: song2 },
        { id: 3, title: 'Song 3', artist: 'Artist 3', duration: '2:50', image: image3, mp3: song3 },
        { id: 4, title: 'Song 4', artist: 'Artist 4', duration: '3:45', image: image4, mp3: song4 },
        { id: 5, title: 'Song 5', artist: 'Artist 5', duration: '4:20', image: image5, mp3: song5}
    ];

    const handlePlayPause = (song) => {
        if (currentSong === song) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        } else {
            const newAudio = new Audio(song.mp3);
            setCurrentSong(song);
            setAudio(newAudio);
            newAudio.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="mt-2">
            <Row>
                {/* Sidebar */}
                <Col md={3}>
                    <div className="sidebar">
                        <Button variant="light" className="mb-1">Explore</Button>
                        <Button variant="light" className="mb-1">Favorites</Button>
                        <Button variant="light" className="mb-2">Current Playlist</Button>
                        <h5 className="mt-3">Additional Music</h5>
                        {musicList.map((music) => (
                            <Button key={music.id} variant="light" className="mb-2" onClick={() => handlePlayPause(music)}>{music.title}</Button>
                        ))}
                    </div>
                </Col>
                {/* Music List */}
                <Col md={9}>
                    <div className="gradient-background p-4" style={{ minHeight: '100vh' }}>
                        <h1 className="text-center mb-2" style={{ color: "white" }}>Music List</h1>
                        <Row>
                            {musicList.map((music) => (
                                <Col md={12} key={music.id} className="mb-3">
                                    <Card className="d-flex flex-row align-items-center">
                                        <img src={music.image} alt={music.title} style={{ width: '80px', height: '80px', objectFit: 'cover', marginLeft: "20px", padding: "10px", borderRadius: "50%" }} />
                                        <div className="ml-3" style={{ marginLeft: "20px" }}>
                                            <h5>{music.title}</h5>
                                            <p className="mb-0">{music.artist}</p>
                                        </div>
                                        <div className="align-content-sm-around">
                                            <Button onClick={() => handlePlayPause(music)} variant="primary" className="mr-2" style={{ marginLeft: "200px" }}>
                                                <FontAwesomeIcon icon={currentSong === music && isPlaying ? faPause : faPlay} />
                                            </Button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
            {/* Music Player */}
            <div className="music-player-line bg-light p-2 rounded">
                {currentSong && (
                    <Row className="align-items-center">
                        <Col md={2}>
                            <img src={currentSong.image} alt={currentSong.title} style={{ width: '100%', height: '100%' }} />
                        </Col>
                        <Col md={8}>
                            <h6>{currentSong.title}</h6>
                            <p className="mb-0">{currentSong.artist}</p>
                            <p className="mb-0">Duration: {currentSong.duration}</p>
                        </Col>
                        <Col md={2} className="text-right">
                            <Button onClick={() => handlePlayPause(currentSong)} variant="primary">
                                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                            </Button>
                        </Col>
                    </Row>
                )}
            </div>
        </div>
    );
};

export default MusicListPage;

