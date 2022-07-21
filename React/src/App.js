
import './App.css';
import Blogs from './components/Blogs'
import BlogInputs from './components/BlogInputs';



function App() {
  return (
    <div className="App">
      <h1>List of Blogs</h1>
      <Blogs/>
      <BlogInputs/>
    </div>
  );
}

export default App;
