import React, { useState } from "react";
import { addJob, fetchJobs, uploadJobs } from "../../data/Jobs"; // adjust path
import "./PostJob.css";

const PostJob = () => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    description: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const currentJobs = await fetchJobs(); // Get existing jobs
      const newJobs = [...currentJobs, formData]; // Add the new one

      await uploadJobs(newJobs); // ✅ Pass the updated array
      alert("Job posted successfully!");

      setFormData({ company: "", title: "", description: "", email: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to post job.");
    }
  };
  return (
    <div className="postjob-container">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit} className="postjob-form">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;