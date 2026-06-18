import React, { useState } from 'react';
import { registerUser } from '../api/user.api';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
import { useNavigate } from '@tanstack/react-router';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await registerUser(name, email, password);
      dispatch(login(data.user));
      navigate({ to: "/dashboard" });
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err.message ||
        'Registration failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-black px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">

        <div className="bg-white/5 backdrop-blur-xl 
                        shadow-xl 
                        p-5 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-center mb-6 text-white">
            Create Account
          </h2>
          {error && (
            <div className="mb-4 p-3 text-sm bg-red-500/20 text-red-400 rounded-md">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">
              Full Name
            </label>
            <input
              className="w-full py-2.5 px-3 sm:py-3 sm:px-4 
                         bg-black/40 border border-white/10 
                         rounded-lg text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">
              Email
            </label>
            <input
              className="w-full py-2.5 px-3 sm:py-3 sm:px-4 
                         bg-black/40 border border-white/10 
                         rounded-lg text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm mb-2">
              Password
            </label>
            <input
              className="w-full py-2.5 px-3 sm:py-3 sm:px-4 
                         bg-black/40 border border-white/10 
                         rounded-lg text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <button
            className={`w-full py-2.5 sm:py-3 rounded-lg 
                       font-serif text-black transition 
                       bg-blue-200 hover:bg-blue-300 
                       
                       ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
         

        </div>
      </form>
    </div>
  );
};

export default RegisterForm;