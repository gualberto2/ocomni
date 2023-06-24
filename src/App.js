import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Newsletter from "./pages/Newsletter";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import ForgotPassword from "./pages/ForgotPassword";
import { PrivateRoute } from "./components/PrivateRoute";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Post from "./components/Post";
import ProjectCalculator from "./pages/ProjectCalculator";
import Article from "./pages/Article";
import AllBlogs from "./pages/AllBlogs";
import ScrollToTop from "./components/ScrollToTop";
import "./pageAnimations.css";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/account" element={<PrivateRoute />}>
            <Route path="/account" element={<Profile />} />
          </Route>
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/project-calculator" element={<ProjectCalculator />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
