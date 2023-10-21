import { Link } from "react-router-dom";
import BookModel from "../../../Models/BookModel";
import React from "react";

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <div className="card mt-3 shadow p-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {props.book.img ? (
              <img src={props.book.img} height="196" width="123" alt="book" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                height="196"
                width="123"
                alt="book"
              />
            )}
          </div>
          <div className="d-lg-none d-flex justify-content-center align-items-center">
            {props.book.img ? (
              <img src={props.book.img} height="196" width="123" alt="book" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                height="196"
                width="123"
                alt="book"
              />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.book.author}</h5>
            <h4>{props.book.title}</h4>
            <p>{props.book.description}</p>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <Link
            className="btn btn-md main-color text-white"
            to={`/checkout/${props.book.id}`}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};
