import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../services/blogService'; 

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs(); 
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        getBlogs();
    }, []);

    return (
        <div>
            <h1>All Blogs</h1>
            <Link to="/create">Create New Blog</Link>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id}>
                        <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;