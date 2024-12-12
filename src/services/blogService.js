import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

// Fetch all blogs
export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${API}/blogs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error; // Propagate the error to handle it in the component
    }
};

// Fetch a single blog by ID
export const fetchBlog = async (id) => {
    try {
        const response = await axios.get(`${API}/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching blog with ID ${id}:`, error);
        throw error;
    }
};

// Create a new blog
export const createBlog = async (blog) => {
    try {
        const response = await axios.post(`${API}/blogs`, blog);
        return response.data;
    } catch (error) {
        console.error("Error creating blog:", error);
        throw error;
    }
};

// Update a blog by ID
export const updateBlog = async (id, updatedBlog) => {
    try {
        const response = await axios.put(`${API}/blogs/${id}`, updatedBlog);
        return response.data;
    } catch (error) {
        console.error(`Error updating blog with ID ${id}:`, error);
        throw error;
    }
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
    try {
        const response = await axios.delete(`${API}/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting blog with ID ${id}:`, error);
        throw error;
    }
};