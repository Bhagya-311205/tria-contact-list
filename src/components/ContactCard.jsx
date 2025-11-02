function ContactCard({ contact }) {
  return (
    <div className="flex items-center p-4 bg-blue-200 border border-slate-200 rounded-lg shadow-sm hover:bg-blue-50 transition duration-200">
      
      <div className="shrink-0 items-center justify-center m-2 ml-0">
        <img src="/assets/images/User.png" alt="User Avatar" className="h-14 w-14"/>
      </div>

      <div className="ml-5 min-w-0">
        <h3 className="text-xl font-bold text-black overflow-hidden text-ellipsis whitespace-nowrap" title={contact.name}>{contact.name}</h3>
        <p className="text-md font-semibold text-gray-900">
          <img src="/assets/images/Phone.png" alt="Phone" className="inline-block mr-1 mb-0.5 h-4"/>
          {contact.number}
        </p>
        <p className="text-sm text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap" title={contact.email}>
          <img src="/assets/images/Mail.png" alt="Email" className="inline-block mr-1 mb-0.5 h-4"/>
          {contact.email}
        </p>
      </div>
    </div>
  );
}

export default ContactCard;