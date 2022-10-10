import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

const UpdateBookInfo = () => {
  const { id } = useParams();

  const [state, setState] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/books/${id}`)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
      });
  }, [id]);

  const onChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: state.title,
      isbn: state.isbn,
      author: state.author,
      description: state.description,
      published_date: state.published_date,
      publisher: state.publisher,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/books/${id}`, data)
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show BooK List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Book</h1>
            <p className="lead text-center">Update Book's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="form-control"
                value={state.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="form-control"
                value={state.isbn}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={state.author}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Describe this book"
                name="description"
                className="form-control"
                value={state.description}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="published_date">Published Date</label>
              <input
                type="date"
                placeholder="published_date"
                name="published_date"
                className="form-control"
                value={state.published_date}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of this Book"
                name="publisher"
                className="form-control"
                value={state.publisher}
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookInfo;
