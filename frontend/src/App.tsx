import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/create-book";
import ShowBookList from "./components/show-book-list";
import ShowBookDetails from "./components/show-book-details";
import UpdateBookInfo from "./components/update-book-info";

console.log(process.env.REACT_APP_API_URL);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowBookList />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
        <Route path="/show-book/:id" element={<ShowBookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
