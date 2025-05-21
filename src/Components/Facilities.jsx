import React from 'react';
import './Facilities.css';

export default function Facilities() {
  return (
    <section className="facilities-section">
      <div className="container text-center">
        <p className="facilities-subtitle">— <em>Facilities</em>  —</p>
        <h2 className="facilities-title">Hotel Facilities</h2>

        <div className="facilities-row">
          <div className="facility-card">
            <img src="https://moonlit-react.netlify.app/assets/images/icon/bed.svg" alt="Rooms and Suites" className="facility-icon" />
            <h3 className="facility-heading">Rooms and Suites</h3>
            <p className="facility-description">
              Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.
            </p>
          </div>

          <div className="facility-card">
            <img src="https://moonlit-react.netlify.app/assets/images/icon/security.svg" alt="24-Hour Security" className="facility-icon" />
            <h3 className="facility-heading">24-Hour Security</h3>
            <p className="facility-description">
              On-site security personnel and best surveillance. from standard to luxury suites,
              Secure storage for valuables.
            </p>
          </div>

          <div className="facility-card">
            <img src="https://moonlit-react.netlify.app/assets/images/icon/gym.svg" alt="Fitness Center" className="facility-icon" />
            <h3 className="facility-heading">Fitness Center</h3>
            <p className="facility-description">
              Equipped with exercise machines and weights. Offering massages, facials, and other treatments.
            </p>
          </div>

          <div className="facility-card">
            <img src="https://moonlit-react.netlify.app/assets/images/icon/swimming-pool.svg" alt="Swimming Pool" className="facility-icon" />
            <h3 className="facility-heading">Swimming Pool</h3>
            <p className="facility-description">
              Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
