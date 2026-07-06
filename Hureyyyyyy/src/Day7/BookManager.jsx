import { useState } from "react";
import "./BookManager.css";
export const BookManager = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Math",
      price: "500.5",
      writer: "Anish",
      year: "2026",
    },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [writer, setWriter] = useState("");
  const [year, setYear] = useState("");
  let handleNameChange = (event) => setName(event.target.value);
  let handlePriceChange = (event) => setPrice(event.target.value);
  let handleWriterChange = (event) => setWriter(event.target.value);
  let handleYearChange = (event) => setYear(event.target.value);
  let handleFormSubmit = (event) => {
    event.preventDefault();
    if (name === "" || price === "" || writer === "" || year === "") {
      alert("Please fill all fields");
      return;
    }
    let prepareBooks = [
      ...books,
      {
        id: books.length + 1,
        name: name,
        price: price,
        writer: writer,
        year: year,
      },
    ];
    setBooks(prepareBooks);
    alert(`New book "${name}" has been added successfully`);
    setName("");
    setPrice("");
    setWriter("");
    setYear("");
  };
  let handleDelete = (id) => {
    let filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };
  return (
    <div className="book-manager">
      <h1>Book Manager</h1>
      <form onSubmit={handleFormSubmit} className="book-form">
        <div className="form-group">
          <label>Book Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter book name"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price of book"
          />
        </div>
        <div className="form-group">
          <label>Writer</label>
          <input
            type="text"
            value={writer}
            onChange={handleWriterChange}
            placeholder="Enter writer of book"
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="text"
            value={year}
            onChange={handleYearChange}
            placeholder="Enter published year"
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <div className="book-list">
        <h2>Book List</h2>
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <p><strong>ID:</strong> {book.id}</p>
            <p><strong>Name:</strong> {book.name}</p>
            <p><strong>Price:</strong> Rs. {book.price}</p>
            <p><strong>Writer:</strong> {book.writer}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};