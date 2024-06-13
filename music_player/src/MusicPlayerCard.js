import React, { useState } from 'react';
import { Card, Button, Row, Col, CardText, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import musicImage from './images/img2.jpg'; // Import your music image
import image1 from './images/img2.jpg'; // Import image for small card 1
import image2 from './images/img3.jpg'; // Import image for small card 2
import image3 from './images/img4.jpg'; // Import image for small card 3
//import image5 from './images/img5.jpg'; // Import image for small card 4
import image6 from './images/img6.jpg'; // Import image for small card 5
import './Music_player.css'; // Import your CSS file

// Import icons from Font Awesome
import { faUser, faSearch, faLanguage, faBars, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MusicPlayerCard = () => {
    const [isPlaying, setIsPlaying] = useState(false); // State to track if music is playing

    // Define an array of objects containing data for each small card
    const smallCards = [
        { id: 1, image: image1, title: 'Playlist 1',  link: '/music-list' },
        { id: 2, image: image2, title: 'Playlist 2',   link: '/music-playlist' },
        { id: 3, image: image3, title: 'Playlist 3',   link: '/music-list' },
        { id: 4, image: image6, title: 'Playlist 4',   link: '/music-playlist' }
    ];

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying); // Toggle music play state
    };

    // Define an array of objects containing data for each navbar icon
    const navIcons = [
        { id: 1, icon: faUser },
        { id: 2, icon: faSearch },
        { id: 3, icon: faLanguage },
        { id: 4, icon: faBars }
    ];

    return (
        <div className="text-center">
            <div className="gradient-background">
                {/* Navbar with profile, search, language, and menu icons */}
                <Navbar className="navbar">
                    <Navbar.Brand style={{ color: "white", marginLeft:"100px",marginTop:"40px", fontSize:"30px", fontFamily:"sans-serif"}}>Music Player</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div className="navbar-icons">
                                {navIcons.map(icon => (
                                    <FontAwesomeIcon key={icon.id} icon={icon.icon} className="navbar-icon" style={{ color: "white", paddingRight: "35px" ,marginTop:"25px", fontSize:"25px"  }} />
                                ))}
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="justify-content-start" style={{marginTop:"25px",marginLeft:"150px"}}>
                    <Card style={{ width: "16rem", padding: "15px", borderRadius:"15px" }} className='gradient-background'>
                        <Card.Img variant="top" src={musicImage} className="small-image" style={{ height: '220px', width: '220px', borderRadius: '15px' }} />
                        <Card.Body>
                            <Card.Title style={{color:"white",fontSize:"20px",marginTop:"10px", fontFamily:"sans-serif"}}>Dreamers</Card.Title>
                            <div className="d-flex justify-content-center control-buttons">
                                <Button variant="light">
                                    <i className="fas fa-backward"></i>
                                </Button>
                                <Button variant="light" onClick={handleTogglePlay}>
                                    {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                                </Button>
                                <Button variant="light">
                                    <i className="fas fa-forward"></i>
                                </Button>
                                <Button variant="light">
                                    <i className="fas fa-redo"></i>
                                </Button>
                            </div>
                            <div className="timestamp-container" style={{marginTop:"10px"}}>
                                    <span className="timestamp" style={{"color":"white"}}>0:00</span>
                                    <input type="range" min="5" max="100" defaultValue="0" className="music-player-line" />  <span className="timestamp" style={{"color":"white"}}>3:45</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
                {/* Playlists */}
                <Row>
                    <Col className="col-8">
                        <h1 style={{ marginTop: '-350px', color: 'white', marginLeft: '450px', fontSize: '45px', textAlign: "left" }}>Play Your</h1>
                        <h1 style={{ color: 'white', marginLeft: '450px', fontSize: '45px', textAlign: "left", marginTop: "-5px" }}>Beloved Music</h1>
                        <p style={{ color: 'white', marginLeft: '450px', marginTop: '-9px', textAlign: "left" }}>Selected music from various genres, artists, and composers.</p>
                        <p style={{ color: 'white', marginLeft: '450px', marginTop: '-14px', textAlign: "left" }}>Play now, completely free and convenient.</p>
                        <Row>
            {smallCards.map(card => (
                <Col key={card.id} className="col-3">
                    {/* Use Link to navigate to different playlists */}
                    <Link to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card className="small-card gradient-background1" style={{ width: "150px", height: "175px", padding: "10px", textAlign: "center", marginTop: "2px", marginLeft: "450px", paddingRight: "20px", marginBottom: "20px" }}>
                            <Card.Img variant="top" src={card.image} className="small-image" style={{ height: '130px', width: '130px', borderRadius: '10px' }} />
                            <CardText style={{ color: "white", marginTop: "8px", fontFamily: "sans-serif" }}>{card.title}</CardText>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
                    </Col>
                </Row>
                
            </div>
            
        </div>
    );
};

export default MusicPlayerCard;


// import React, { useState } from 'react';
// import { Card, Button, Row, Col, CardText, Navbar, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import musicImage from './images/img2.jpg'; // Import your music image
// import image1 from './images/img2.jpg'; // Import image for small card 1
// import image2 from './images/img3.jpg'; // Import image for small card 2
// import image3 from './images/img4.jpg'; // Import image for small card 3
// import image4 from './images/img5.jpg'; // Import image for small card 4
// import image6 from './images/img6.jpg'; // Import image for small card 4
// import './Music_player.css'; // Import your CSS file

// // Import icons from Font Awesome
// import { faUser, faSearch, faLanguage, faBars, faPlay, faPause, faAngleDoubleDown, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const MusicPlayerCard = () => {
//     const [isPlaying, setIsPlaying] = useState(false); // State to track if music is playing

//     // Define an array of objects containing data for each small card
//     const smallCards = [
//         { id: 1, image: image1, title: 'Playlist 1',  link: '/music-list' },
//         { id: 2, image: image2, title: 'Playlist 2',   link: '/music-playlist' },
//         { id: 3, image: image3, title: 'Playlist 3',   link: '/music-list' },
//         { id: 4, image: image6, title: 'Playlist 4',   link: '/music-playlist' }
//     ];

//     const handleTogglePlay = () => {
//         setIsPlaying(!isPlaying); // Toggle music play state
//     };

//     // Define an array of objects containing data for each navbar icon
//     const navIcons = [
//         { id: 1, icon: faUser },
//         { id: 2, icon: faSearch },
//         { id: 3, icon: faLanguage },
//         { id: 4, icon: faBars }
//     ];

//     return (
//         <div className="text-center">
//             <div className="gradient-background">
//                 {/* Navbar with profile, search, language, and menu icons */}
//                 <Navbar className="navbar">
//                     <Navbar.Brand style={{ color: "white", marginLeft:"100px",marginTop:"40px", fontSize:"30px", fontFamily:"sans-serif"}}>Music Player</Navbar.Brand>
//                     <Navbar.Collapse className="justify-content-end">
//                         <Navbar.Text>
//                             <div className="navbar-icons">
//                                 {navIcons.map(icon => (
//                                     <FontAwesomeIcon key={icon.id} icon={icon.icon} className="navbar-icon" style={{ color: "white", paddingRight: "35px" ,marginTop:"25px", fontSize:"25px"  }} />
//                                 ))}
//                             </div>
//                         </Navbar.Text>
//                     </Navbar.Collapse>
//                 </Navbar>
//                 <Container className="justify-content-start" style={{marginTop:"25px",marginLeft:"150px"}}>
//                     <Card style={{ width: "16rem", padding: "15px", borderRadius:"15px" }} className='gradient-background'>
//                         <Card.Img variant="top" src={musicImage} className="small-image" style={{ height: '220px', width: '220px', borderRadius: '15px' }} />
//                         <Card.Body>
//                             <Card.Title style={{color:"white",fontSize:"20px",marginTop:"10px", fontFamily:"sans-serif"}}>Dreamers</Card.Title>
//                             <div className="d-flex justify-content-center control-buttons">
//                                 <Button variant="light">
//                                     <i className="fas fa-backward"></i>
//                                 </Button>
//                                 <Button variant="light" onClick={handleTogglePlay}>
//                                     {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
//                                 </Button>
//                                 <Button variant="light">
//                                     <i className="fas fa-forward"></i>
//                                 </Button>
//                                 <Button variant="light">
//                                     <i className="fas fa-redo"></i>
//                                 </Button>
//                             </div>
//                             <div className="timestamp-container" style={{marginTop:"10px"}}>
//                                     <span className="timestamp" style={{"color":"white"}}>0:00</span>
//                                     <input type="range" min="5" max="100" defaultValue="0" className="music-player-line" />  <span className="timestamp" style={{"color":"white"}}>3:45</span>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Container>
//                 {/* Playlists */}
//                 <Row>
//                     <Col className="col-8">
//                         <h1 style={{ marginTop: '-350px', color: 'white', marginLeft: '450px', fontSize: '45px', textAlign: "left" }}>Play Your</h1>
//                         <h1 style={{ color: 'white', marginLeft: '450px', fontSize: '45px', textAlign: "left", marginTop: "-5px" }}>Beloved Music</h1>
//                         <p style={{ color: 'white', marginLeft: '450px', marginTop: '-9px', textAlign: "left" }}>Selected music from various genres, artists, and composers.</p>
//                         <p style={{ color: 'white', marginLeft: '450px', marginTop: '-14px', textAlign: "left" }}>Play now, completely free and convenient.</p>
//                         <Row>
//                             {smallCards.map(card => (
//                                 <Col key={card.id} className="col-3">
//                                     {/* Use Link to navigate to different playlists */}
//                                     <Link to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         <Card className="small-card gradient-background1" style={{ width: "150px", height: "175px", padding: "10px", textAlign: "center", marginTop: "2px", marginLeft: "450px", paddingRight: "20px", marginBottom: "20px" }}>
//                                             <Card.Img variant="top" src={card.image} className="small-image" style={{ height: '130px', width: '130px', borderRadius: '10px' }} />
//                                             <CardText style={{ color: "white", marginTop: "8px", fontFamily: "sans-serif" }}>{card.title}</CardText>
//                                         </Card>
//                                     </Link>
//                                 </Col>
//                             ))}
//                         </Row>
//                         {/* Next Page Icon */}
//                         <Row className="justify-content-center">
//                             <Col className="col-8">
//                                 <FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: "white", fontSize: "45px", marginTop: "-100px", marginLeft:"1200px"}} />
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//             </div>
//         </div>
//     );
// };

// export default MusicPlayerCard;
