// Jobs.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Jobs.css';

const Jobs = () => {
  return (
    <div>
      <h2>
        <Link to='/Home'>
          <div className="continue-btn">Back</div>
        </Link>
      </h2>
      <div className="hero">
        <div className="card text-bg-dark-black border-0">
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              {/* Apply CSS styles to highlight the title */}
              <h5 className="card-title display-5 fw-bolder mb-0 highlight-title">
                THE JOBS WE OFFER
              </h5>
              <p>1. Network administrator National average salary: ₹4,73,876 per year</p>
              <p>2. User experience designer National average salary: ₹5,65,848 per year</p>
              <p>3. Systems analyst National average salary: ₹5,97,560 per year</p>
              <p>4. Database administrator National average salary: ₹6,48,326 per year</p>
              <p>5. Software application packager National average salary: ₹6,59,966 per year</p>
              <p>6. Full-stack developer National average salary: ₹7,29,064 per year</p>
              <p>7. Senior software engineer National average salary: ₹7,82,478 per year</p>
              <p className="card-text lead fs-2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
