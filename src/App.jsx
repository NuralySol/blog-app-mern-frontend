import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/edit/:id" element={<EditBlog />} />
          </Routes>
      </Router>
  );
}

export default App;