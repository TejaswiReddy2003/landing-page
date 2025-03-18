import { useState, useEffect, useCallback } from "react";
import axios from "axios";

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    return this.collectWords(node, prefix);
  }

  collectWords(node, prefix) {
    let results = [];
    if (node.isEndOfWord) results.push(prefix);
    for (let char in node.children) {
      results.push(...this.collectWords(node.children[char], prefix + char));
    }
    return results;
  }
}

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return <input className="p-2 border w-full" type="text" placeholder="Search users..." value={query} onChange={handleChange} />;
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const trie = new Trie();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      response.data.forEach((user) => trie.insert(user.name.toLowerCase()));
    });
  }, []);

  const searchUsers = useCallback((query) => {
    if (!query) return setFilteredUsers(users);
    const matches = trie.search(query.toLowerCase());
    setFilteredUsers(users.filter((user) => matches.includes(user.name.toLowerCase())));
  }, [users]);

  return (
    <div className="p-10">
      <SearchBar onSearch={searchUsers} />
      <ul className="mt-4">
        {filteredUsers.map((user) => (
          <li key={user.id} className="border p-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
