import React from 'react';
import Background from '../Miyagi & Andy Panda - Minor (Mood Video).mp4';
import '../css/index.css';
const Home = () => {
  return (
<div className="container">

        <div className="first">
            <div className="prizma">
                <div className="intro-text">
                    <h1>Just get</h1>
                    <h3>your own Vibe.</h3>
                    <p><a href="/signup" className='getStarted'>Get Started</a></p>
                </div>
            </div>
            <video className="video" autoPlay muted loop>
                <source src={Background} type='video/mp4'/>
            </video>
        </div>

    </div>
  );
};

export default Home;