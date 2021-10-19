import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogHome from './components/BlogHome';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/blogs">
                <BlogHome />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
