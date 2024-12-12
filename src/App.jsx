import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';

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