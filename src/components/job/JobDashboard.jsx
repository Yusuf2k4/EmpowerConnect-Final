import React, { useEffect, useState } from "react";
import "./JobDashboard.css";
import jobs, { fetchJobs, uploadJobs } from "../../data/Jobs";

const JobDashboard = () => {
  const [job, setJobs] = useState(jobs);
  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    alert(`Email copied: ${email}`);
  };
  
  
  useEffect(() => {
    const loadJobs = async () => {
      const jobsFromDB = await fetchJobs();
      setJobs(jobsFromDB || []); // fallback if null
    };

    loadJobs();
  }, []);

  return (
    <div className="job-dashboard">
      <h2>Jobs for the Deaf Community</h2>
      <div className="job-listings">
        {job.map((job, index) => (
          <div className="job-card-full" key={index}>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-description">{job.description}</p>
            <div className="email-row">
              <p className="job-email">{job.email}</p>
              <button
                className="copy-btn"
                onClick={() => handleCopy(job.email)}
              >
                Copy Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDashboard;