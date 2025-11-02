import { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm';

const mockContacts = [
  { id: 1, name: 'Ashish Singh', number: '9145265438', email: 'ashish32@gmail.com' },
  { id: 2, name: 'Soham Bolaj', number: '8830743400', email: 'soham072fdssd5@gmail.com' },
  { id: 3, name: 'Harsh Agrawal', number: '9420143245', email: 'Harsh2612@gmail.com' },
  { id: 4, name: 'Yogesh Kulkarni', number: '8626009937', email: 'Yogesh@gmail.com' },
  { id: 5, name: 'Arin Madan', number: '7218333555', email: 'Arin1212@gmail.com' },
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContacts(mockContacts);
      setIsLoading(false);
    }, 1000); 
  }, []);

  const addContact = (newContact) => {
    const contactWithId = { id: Date.now(), ...newContact };
    setContacts([contactWithId, ...contacts]);
    setShowAddForm(false);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[url('/assets/images/Background_Imagee.jpeg')] bg-cover bg-center bg-fixed backdrop-blur-lg">
      <div className= "backdrop-blur-sm backdrop-brightness-60 rounded-lg p-4 md:p-10 max-w-3xl mx-auto">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">Contacts List</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className=" px-2 md:px-4 py-2 w-30 md:w-45 text-wrap bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {showAddForm ? 'Cancel' : 'Create New Contact'}
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white p-6 rounded-lg shadow-xl mb-6">
            <h2 className=" text-xl md:text-2xl font-semibold md:font-bold text-slate-700 mb-4">Create New Contact</h2>
            <AddContactForm onAddContact={addContact} />
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="bg-slate-200 rounded-lg">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
          {isLoading ? (
            <p className="text-center text-slate-500 mt-4">Loading contacts...</p>
          ) : (
            <ContactList contacts={filteredContacts} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;