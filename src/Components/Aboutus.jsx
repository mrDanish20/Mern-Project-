import React from 'react';
import './Aboutus.css';

import GalleryImg from '../assets/images/Gallery.jpg';
import Amenties from '../assets/images/Amneties.jpg';
import Package from '../assets/images/Package.jpg';
import image1 from '../assets/images/6.jpg'
import image2 from '../assets/images/7.jpg'
import image3 from '../assets/images/Socail-4.jpg'


export default function AboutUs() {
    return (
        <div className="gallery-section">
            <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
                <div className="gallery-text-section">
                    <h2 style={{ marginTop: "10px" }}>
                        About <em>Us</em>
                    </h2>
                    <p style={{ marginTop: "10px" }}>
                        Welcome to our hotel — a sanctuary of comfort, elegance, and exceptional hospitality.
                        From our beautifully designed interiors to our personalized services, we are committed to
                        creating memorable experiences for every guest. Whether you're visiting for business, leisure,
                        or a special occasion, our dedicated team is here to ensure your stay is nothing short of perfect.
                    </p>
                </div>
            </div>

            <div className="gallery-grid">
                <div
                    className="gallery-card"
                    style={{ backgroundImage: `url(${GalleryImg})` }}
                >
                    <h2>Gallery</h2>
                </div>
                <div
                    className="gallery-card bordered"
                    style={{ backgroundImage: `url(${Amenties})` }}
                >
                    <h2>Amenities</h2>
                </div>
                <div
                    className="gallery-card"
                    style={{ backgroundImage: `url(${Package})` }}
                >
                    <h2>Packages</h2>
                </div>



                {/* <div className="gallery-grid">
                <div
                    className="gallery-card"
                    style={{ backgroundImage: `url(${image1})` }}
                >
                    <h2>Restaurants <br /> Services</h2>
                </div>
                <div
                    className="gallery-card bordered"
                    style={{ backgroundImage: `url(${image2})` }}
                >
                    <h2>Travel & Camping</h2>
                </div>
                <div
                    className="gallery-card"
                    style={{ backgroundImage: `url(${image3})` }}
                >
                    <h2>Event & Party</h2>
                </div>
            </div> */}

            </div>

            <div className="gallery-text-section">
                <h2>
                    An <em>inviting</em> escape
                </h2>
                <p>
                    Discover a luxurious retreat where elegance meets comfort. Our hotel
                    offers beautifully designed rooms, world-class amenities, and tailored
                    packages to make your stay unforgettable. Whether you're here for
                    relaxation or adventure, every detail is crafted to exceed your
                    expectations. Explore the gallery, amenities, and exclusive packages
                    to begin your journey.
                </p>
                <button className="history-btn">Our History</button>
            </div>
            
        </div>
        
    );
}
