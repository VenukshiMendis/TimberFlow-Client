import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Login from "./pages/Login"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import CitizenHome from "./pages/Citizen/CitizenHome"
import GramaSewakaHome from "./pages/GramaSewaka/GramaSewakaHome"
import DivisionalSecretaryHome from "./pages/DivisionalSecretary/DivisionalSecretaryHome"
import TimberLicense from "./pages/Citizen/TimberLicense"
function App() {
  const user = true;
  
  return (
    <>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          {/* citizen */} 
          <Route exact path="/citizen" component={CitizenHome} />
          <Route exact path="/citizen/timbercutting" component={TimberLicense} />
          <Route path="/gramasewaka" component={GramaSewakaHome} />
          <Route path="/divisionalsecretary" component={DivisionalSecretaryHome} />
            
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
