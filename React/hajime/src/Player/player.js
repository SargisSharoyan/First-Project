import React from 'react';
import "./player.css";

const Player = () => {

    return (
        <div className='plrContainer'>
            <div className='progressBar'></div>
            <div className='plrCont'>
                <div className='plrPhoto'><img src='https://images.genius.com/68cff7cbd37dc241c96c911c97ec7312.1000x1000x1.jpg'></img></div>
                <div className='btnCont'>
                    <i className="fa-solid fa-backward-step"></i>
                    <i className="fa-solid fa-play"></i>
                    <i className="fa-solid fa-forward-step"></i>
                </div>
            </div>


        </div>
    );
}

export default Player;