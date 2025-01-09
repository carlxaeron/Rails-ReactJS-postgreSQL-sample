import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!formData.passwordConfirmation) {
      newErrors.passwordConfirmation = 'Password confirmation is required';
    } else if (formData.password !== formData.passwordConfirmation) {
      newErrors.passwordConfirmation = 'Password confirmation does not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, formData);
      setSuccessMessage('Sign-up successful!');
      setFormData({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      });
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      {successMessage && <div className="text-green-500 text-center">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.username && <div className="text-red-500 text-sm">{errors.username}</div>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
        </div>
        <div>
          <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-gray-700">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.passwordConfirmation && <div className="text-red-500 text-sm">{errors.passwordConfirmation}</div>}
        </div>
        {errors.general && <div className="text-red-500 text-sm text-center">{errors.general}</div>}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default App;
