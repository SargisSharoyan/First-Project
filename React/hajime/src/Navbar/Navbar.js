import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className='Logo'>
        <h3 className='Logo'>hajime</h3>

      </Link>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}>
        <Link to="/newRelease" className='nav-item home'>
          <li>New Releases</li>
        </Link>
        <Link to="/shop" className='nav-item shop'>
          <li>Shop</li>
        </Link>
        <Link to="/label" className='nav-item label'>
          <li>Label</li>
        </Link>
        <Link to="/chart" className='nav-item chart'>
          <li>Chart</li>
        </Link>
        <Link to="/signup" className='nav-item signup'>
          <li>Sign Up</li>
        </Link>
      </ul>

      <div className={isMobile ? "social-links-mobile" : "social"}>
        <span className="social-item"><a href="https://www.instagram.com/hajimerecords/" className="social-icons"><i className="fa-brands fa-instagram"></i></a></span>
        <span className="social-item"><a href="https://open.spotify.com/artist/0hmUwzWBrPHpGWGrYH05c3" className="social-icons"><i className="fa-brands fa-spotify"></i></a></span>
        <span className="social-item"><a href="https://vk.com/hajimerec" className="social-icons"><i className="fa-brands fa-vk"></i></a></span>
        <span className="social-item"><a href="https://www.youtube.com/channel/UCApdP81v1rMFGiFUq-A7vBQ" className="social-icons"><i className="fa-brands fa-youtube"></i></a></span>
      </div>
      <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
      </button>
    </nav>
  )
}

export default Navbar