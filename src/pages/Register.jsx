import { useState } from 'react';
import { registerUser } from '../services/authService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, email, password });
            alert('Registration successful! Please login.');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
    <h2>Register</h2>
    <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        autoComplete="username"
        required
    />
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
        required
    />
    <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="new-password"
        required
    />
    <button type="submit">Register</button>
</form>
    );
};

export default Register;