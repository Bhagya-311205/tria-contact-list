function SearchBar({ setSearchTerm }) {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src="/assets/images/Searchh.png" alt="Search Icon" className="h-5 w-5"/>
      </div>
      
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;