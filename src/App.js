import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogForm from './components/BlogForm';

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      {/* <BlogForm /> */}
      {/* <YourExistingBlogComponent/> */}
    
        <div className='content'>
          <Switch>
            <Route exact path ="/">
              <Home/>
            </Route>
            <Route path ="/BlogForm">
              <BlogForm/>
            </Route>
            </Switch>
      </div>
      </div>
      </Router>
  );
}

export default App;
