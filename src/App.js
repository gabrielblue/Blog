
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BlogForm from './components/BlogForm';
// import YourExistingBlogComponent from './components/YourExistingBlog';
import MyBlog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BlogForm /> */}
      {/* <YourExistingBlogComponent/> */}
    
      <div className='content'>
      <MyBlog/>
      </div>
    </div>
  );
}

export default App;
