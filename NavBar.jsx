import { useState } from "react";

const sections = [
  { id: "hero", name: "Hero Section" },
  { id: "services", name: "Services" },
  { id: "pricing", name: "Pricing" },
  { id: "users", name: "Users" },
  { id: "contact", name: "Contact" },
];

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [filteredSections, setFilteredSections] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    if (value) {
      setFilteredSections(
        sections.filter((section) =>
          section.name.toLowerCase().includes(value)
        )
      );
    } else {
      setFilteredSections([]);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setQuery("");
    setFilteredSections([]);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 p-4 text-white flex justify-between items-center shadow-lg z-50">
      <h1 className="text-2xl font-bold">Landing Page</h1>
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search sections..."
          value={query}
          onChange={handleSearch}
          className="w-full p-2 text-black rounded border"
        />
        {filteredSections.length > 0 && (
          <ul className="absolute w-full bg-white text-black border rounded shadow-lg mt-1">
            {filteredSections.map((section) => (
              <li
                key={section.id}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => scrollToSection(section.id)}
              >
                {section.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
