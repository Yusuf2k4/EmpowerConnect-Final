import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Footer,
  Home,
  Detect,
  NotFound,
  Dashboard,
} from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobDashboard from "./components/job/JobDashboard";
import PostJob from "./components/job/PostJob.jsx";
import { uploadJobs } from "./data/Jobs";
import { useEffect } from "react";

const notifyMsg = (type, msg) => {
  if (type === "success") {
    const notify = () => toast.success(msg);
    notify();
  } else {
    const notify = () => toast.error(msg);
    notify();
  }
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar notifyMsg={notifyMsg} />
      {children}
      {/* <Footer /> */}
    </>
  );
};

function App() {
  // useEffect(() => {
  //   uploadJobs();
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout notifyMsg={notifyMsg}>
              <Home />
            </Layout>
          }
        />
        <Route
          exact
          path="/detect"
          element={
            <Layout>
              <Detect />
            </Layout>
          }
        />
        import JobDashboard from "./components/JobDashboard";
        <Route
          exact
          path="/jobs"
          element={
            <Layout>
              <JobDashboard />
            </Layout>
          }
        />
        import PostJob from "./components/job/PostJob"; // Add this import ...
        <Route
          exact
          path="/post-job"
          element={
            <Layout>
              <PostJob />
            </Layout>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;