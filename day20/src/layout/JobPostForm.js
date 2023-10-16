import React, { useState } from 'react';
import axios from 'axios';
import "../layout/JobPostForm.css";

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/auth/jobs/post', formData);
      setFormData({
        title: '',
        description: '',
        location: '',
      });
      alert('Job posted successfully');
    } catch (error) {
      console.error('Error posting job: ', error);
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostJobForm;