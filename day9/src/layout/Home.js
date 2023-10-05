import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../layout/Home.css";

function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : "Guest";

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search form submission (you can customize this)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the search functionality or redirect to a search results page
    console.log("Search Query:", searchQuery);
  };

  return (
    <div>
      <NavBar />
      <div className="user">Welcome {username}!</div>

      {/* Search bar */}
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="job title..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <Footer />
      <Sidebar />
    </div>
  );
}

export default Home;
