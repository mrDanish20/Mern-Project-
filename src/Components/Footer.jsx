import React from 'react';
import footerimg from '../assets/images/Footer.png'

export default function Footer() {
  return (
    <div style={{
     backgroundImage: `url(${footerimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '40px 20px',
   
      marginTop: "100px"
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: "40px" }}>
        <h2>Join the <em>Hideaway</em> Newsletters</h2>
        <p>Subscribe to our mailing list to receive updates and promotional offers.</p>
        <div style={{
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '10px 15px',
              border: 'none',
              outline: 'none',
              width: '270px',
            
            }}
          />
          <button
            style={{
              padding: '10px 22px',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
             
            }}
            onMouseOver={e => {
              e.target.style.background = 'white';
              e.target.style.color = 'black';
            }}
            onMouseOut={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      
        paddingTop: '20px'
      }}>
        <p style={{ margin: 0, marginLeft :"160px", marginTop:"30px" }}>
          © Hideaway 2018 | Template crafted by <a href="https://themewagon.com" style={{ color: '#ffcc00' , }}>Themewagon</a>
        </p>
        <nav style={{ marginRight :"160px", marginTop:"30px" }}>
          <a href="#home" style={navStyle}>Home</a>
          <a href="#about" style={navStyle}>About</a>
          <a href="#services" style={navStyle}>Services</a>
          <a href="#contact" style={navStyle}>Contact</a>
        </nav>
      </div>
    </div>
  );
}

const navStyle = {
  marginLeft: '15px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500'
};
