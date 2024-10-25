
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJobs from "./pages/PostJobs";
import SavedJobs from "./pages/SavedJobs";
import './App.css';
import { ThemeProvider } from "./Layout/theme-provider";


function App() {

  return (
    <Router>
      <ThemeProvider>
        <AppLayout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="/Jobs" element={<JobListing />} />
            <Route path="/Jobs/:jobId" element={<JobPage />} />
            <Route path="post-job" element={<PostJobs />} />
            <Route path="saved-jobs" element={<SavedJobs />} />
          </Routes>
        </AppLayout>
        </ThemeProvider>
      
    </Router>
  );
}

export default App
