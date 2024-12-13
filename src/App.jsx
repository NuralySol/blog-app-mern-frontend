import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute'; // Protect routes
import Navbar from './components/NavBar'; // Dynamic navigation
import UserProvider from './context/UserContext'; // User context

function App() {
    return (
        <UserProvider>
            <Router>
                <Navbar /> {/* Dynamic Navbar */}
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<BlogList />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected Routes */}
                    <Route 
                        path="/create" 
                        element={
                            <ProtectedRoute>
                                <CreateBlog />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/edit/:id" 
                        element={
                            <ProtectedRoute>
                                <EditBlog />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;