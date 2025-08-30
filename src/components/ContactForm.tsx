'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
        
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
        
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
        
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}