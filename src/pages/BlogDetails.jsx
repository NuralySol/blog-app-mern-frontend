import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlog, deleteBlog } from '../services/blogService';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const data = await fetchBlog(id); // Correct function name
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };

        fetchBlogDetails();
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteBlog(id);
            navigate('/');
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    if (!blog) return <div>Loading...</div>;

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default BlogDetails;