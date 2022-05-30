import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";
import SingleCourseDetails from "./Pages/SingleCourseDetails/SingleCourseDetails";
import Home3 from "./Components/HomeComponent/Home";
import StudentLogin from "./Components/StudentComponent/StudentLogin/StudentLogin";
import AdminLogin from "./Components/AdminComponent/AdminLogin/AdminLogin";
import AdminDashboard from "./Components/AdminComponent/AdminDashboard/AdminDashboard";
import StudentDashboard from "./Components/StudentComponent/StudentDashboard/StudentDashboard";
import StudentSignup from "./Components/StudentComponent/StudentSignup/StudentSignup";

const override = css``;

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="animation-box">
          <ClockLoader
            loading={loading}
            size={50}
            color="#dda83f"
            css={override}
          />
        </div>
      ) : (
        <div>
          <Router >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/courses">
                <Courses />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/courseDetails/:courseId">
                <SingleCourseDetails />
              </Route>
              <Route path="/exams" >
                <Home3 />
              </Route>
              <Route path="/StudentLogin">
                <StudentLogin />
              </Route>
              <Route path="/StudentSignup" >
                <StudentSignup />
              </Route>
              <Route path="/AdminLogin" >
                <AdminLogin />
              </Route>
              <Route path="/AdminDashboard" >
                <AdminDashboard />
              </Route>
              <Route path="/StudentDashboard" >
                <StudentDashboard />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
}
export default App;
