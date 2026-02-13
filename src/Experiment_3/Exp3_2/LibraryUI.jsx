import React, { useState } from 'react';
import './LibraryUI.css';

const LibraryUI = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddBook = () => {
    if (newBook.title.trim() && newBook.author.trim()) {
      const book = {
        id: Date.now(),
        title: newBook.title.trim(),
        author: newBook.author.trim()
      };
      setBooks([...books, book]);
      setNewBook({ title: '', author: '' });
    }
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="library-container">
      <h1 className="library-title">Library Management System</h1>
      
      <div className="library-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search books..."
          value={searchQuery}
          onChange={handleSearch}
        />
        
        <div className="add-book-form">
          <input
            type="text"
            className="book-input"
            placeholder="Book Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            className="book-input"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <button className="add-book-btn" onClick={handleAddBook}>
            Add Book
          </button>
        </div>
      </div>

      <div className="books-list">
        {filteredBooks.length === 0 ? (
          <p className="no-books">No books found</p>
        ) : (
          filteredBooks.map(book => (
            <div key={book.id} className="book-item">
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
              </div>
              <button 
                className="remove-btn"
                onClick={() => handleRemoveBook(book.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LibraryUI;