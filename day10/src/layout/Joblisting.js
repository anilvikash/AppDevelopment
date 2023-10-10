import React, { useState } from "react";
import "../layout/Joblisting.css";
import { Link } from "react-router-dom";

function Joblisting() {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  const jobs = [
    {
      title: "Network Administrator",
      description: "National average salary: ₹4,73,876 per year",
      location: "Location: chennai",
    },
    {
      title: "User Experience Designer",
      description: "National average salary: ₹5,65,848 per year",
      location: "Location: banglore",
    },
    {
      title: "Systems analyst ",
      description: "National average salary: ₹8,65,848 per year",
      location: "Location: madurai",
    },
    {
      title: " Database administrator",
      description: "National average salary: ₹3,50,848 per year",
      location: "Location: coimbatore",
    },
    {
      title: "Full-stack developer ",
      description: "National average salary: ₹7,65,848 per year",
      location: "Location: trichy",
    },
    {
      title: "Senior software engineer",
      description: "National average salary: ₹10,65,848 per year",
      location: "Location: salem",
    },
    {
      title: "Software application packager",
      description: "National average salary: ₹7,65,463 per year",
      location: "Location: madurai",
    },
    {
      title: "technical support",
      description: "National average salary: ₹2,75,300 per year",
      location: "Location: hyderabad",
    },

  ];

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter jobs based on the search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSearchChange}>
          <input
            type="text"
            placeholder="job title, salary, location..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        
        
                <Link to='/Home'>
                    <div className="continue-btn">Back</div>
                  </Link>
      </div>

      {/* Display filtered jobs */}
      <div className="job-container">
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <div>
  
  
            </div>
          </div>
          
          
        ))}
      </div>
      
    </div>
  );
}

export default Joblisting;
