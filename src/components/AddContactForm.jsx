import { useState } from 'react';

function AddContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert('Name and Mobile Number are required.');
      return;
    }
    if (number.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    onAddContact({ name, number, email });
    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name <span class="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="e.g. Bhagya Agrawal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span class="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="e.g. 9425145678"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="e.g. bhagya3112@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-4">
          <img src="/assets/images/Info.png" alt="Important Note" className="inline-block mr-1 h-4 align-text-top" />
          <span className="text-red-500">*</span> indicates required field
        </p>
        
        <button type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Save Contact
        </button>
      </div>
    </form>
  );
}

export default AddContactForm;