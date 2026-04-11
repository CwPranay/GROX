import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonStyles } from "./components/Skeleton";
import { 
  HeroSkeleton, 
  WorkPageSkeleton, 
  RequestFormSkeleton, 
  LandingPageSkeleton 
} from "./components/PageSkeletons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/WorkPage"));
const Request = lazy(() => import("./pages/Request"));
const GymWebsiteDevelopment = lazy(() => import("./pages/GymWebsiteDevelopment"));
const VideoEditingServices = lazy(() => import("./pages/VideoEditingServices"));

// Page loader with skeleton
function PageLoader({ type = 'home' }) {
  const skeletons = {
    home: <HeroSkeleton />,
    work: <WorkPageSkeleton />,
    request: <RequestFormSkeleton />,
    landing: <LandingPageSkeleton />
  };

  return (
    <>
      <Navbar />
      {skeletons[type]}
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <SkeletonStyles />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<PageLoader type="home" />}>
                <Home />
              </Suspense>
            } 
          />
          <Route 
            path="/work" 
            element={
              <Suspense fallback={<PageLoader type="work" />}>
                <Work />
              </Suspense>
            } 
          />
          <Route 
            path="/request" 
            element={
              <Suspense fallback={<PageLoader type="request" />}>
                <Request />
              </Suspense>
            } 
          />
          <Route 
            path="/gym-website-development-india" 
            element={
              <Suspense fallback={<PageLoader type="landing" />}>
                <GymWebsiteDevelopment />
              </Suspense>
            } 
          />
          <Route 
            path="/video-editing-services-creators" 
            element={
              <Suspense fallback={<PageLoader type="landing" />}>
                <VideoEditingServices />
              </Suspense>
            } 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
