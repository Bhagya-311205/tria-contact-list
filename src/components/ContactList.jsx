import ContactCard from './ContactCard';

function ContactList({ contacts }) {
  
  if (contacts.length === 0) {
    return (
      <p className="text-center text-slate-500 mt-4">
        No contacts found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;