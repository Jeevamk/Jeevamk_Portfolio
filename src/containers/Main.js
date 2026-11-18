import React, { useEffect } from "react";
import {
  Route,
  Switch,
  HashRouter,
  Redirect,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

// On every page change: start the new page at the top and close the
// mobile menu (it's a checkbox, so it otherwise stays open).
function OnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const menu = document.getElementById("menu-btn");
    if (menu) menu.checked = false;
  }, [pathname]);
  return null;
}

export default function Main(propss) {
  const page = (Component) => (props) => (
    <Component {...props} theme={propss.theme} setTheme={propss.setTheme} />
  );

  return (
    <div>
      <HashRouter basename="/">
        <OnRouteChange />
        <Switch>
          <Route
            path="/"
            exact
            render={page(settings.isSplash ? Splash : Home)}
          />
          <Route path="/home" render={page(Home)} />
          <Route path="/experience" render={page(Experience)} />
          <Route path="/education" render={page(Education)} />
          <Route path="/contact" render={page(Contact)} />
          <Route path="/projects" render={page(Projects)} />
          {settings.isSplash && <Route path="/splash" render={page(Splash)} />}
          <Redirect to="/home" />
        </Switch>
      </HashRouter>
    </div>
  );
}
