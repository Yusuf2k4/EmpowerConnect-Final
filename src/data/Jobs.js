let jobs = [
  {
    title: "Accessibility Advocate",
    company: "Inclusion Tech",
    description:
      "Work with our product team to improve accessibility features for hearing-impaired users. Prior knowledge of assistive tech is a plus.",
    email: "careers.inclusiontech@gmail.com",
  },
  {
    title: "Sign Language Content Creator",
    company: "EduSigns",
    description:
      "Create educational videos in Indian Sign Language for deaf learners. Remote work and flexible hours.",
    email: "jobs.edusigns@gmail.com",
  },
  {
    title: "Frontend Developer (Accessible Web)",
    company: "A11yWorks",
    description:
      "Build React components with full WCAG compliance. Looking for developers passionate about inclusive design.",
    email: "hr.a11yworks@gmail.com",
  },
  {
    title: "Community Manager",
    company: "Deaf Connect Online",
    description:
      "Manage our deaf community platform, organize virtual meetups, and support members with resources.",
    email: "connect.deafonline@gmail.com",
  },
  {
    title: "AI Model Trainer - Sign Language",
    company: "VisionComm AI",
    description:
      "Label and train gesture datasets to improve real-time sign language recognition systems.",
    email: "recruit.visioncomm@gmail.com",
  },
];

// Add a new job
export const addJob = (job) => {
  jobs.push(job);
};

// Replace all jobs with new list (e.g., from Firebase)
export const setJobs = (newJobs) => {
  jobs = newJobs;
};

// Get current jobs list
export const getJobs = () => jobs;

// Upload jobs to Firebase
export const uploadJobs = async () => {
  try {
    const res = await fetch(
      "https://sign-language-7c5c5-default-rtdb.firebaseio.com/jobs.json",
      {
        method: "PUT", // overwrites everything
        body: JSON.stringify(jobs),
      }
    );

    if (!res.ok) throw new Error("Failed to upload jobs");
  } catch (err) {
    console.error("Upload error:", err);
  }
};

// Fetch jobs from Firebase
export const fetchJobs = async () => {
  try {
    const res = await fetch(
      "https://sign-language-7c5c5-default-rtdb.firebaseio.com/jobs.json"
    );

    if (!res.ok) throw new Error("Failed to fetch jobs");

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};

export default jobs;