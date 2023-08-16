// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import CommentForm from "./CommentForm";

// test("displays comment text and date/time for each comment", () => {
//   const comments = [
//     { comment: "First comment", time: "7.5 - 10:30" },
//     { comment: "Second comment", time: "7.5 - 11:45" },
//   ];

//   render(<CommentForm slug="example-slug" />);

//   const commentContainer = screen.getByTestId("comment-container");
//   comments.forEach((comment) => {
//     expect(commentContainer).toBeInTheDocument();
//     expect(commentContainer).toBeInTheDocument();
//   });
// });

// test("renders input field and submit button", () => {
//   render(<CommentForm slug="example-slug" />);

//   const commentInput = screen.getByLabelText("Your comment:");
//   const submitButton = screen.getByRole("button", { name: "Send" });

//   expect(commentInput).toBeInTheDocument();
//   expect(submitButton).toBeInTheDocument();
// });

// test("submits a comment", () => {
//   render(<CommentForm slug="example-slug" />);

//   const commentInput = screen.getByLabelText("Your comment:");
//   const submitButton = screen.getByRole("button", { name: "Send" });

//   const commentText = "New comment";
//   fireEvent.change(commentInput, { target: { value: commentText } });
//   fireEvent.click(submitButton);

//   const commentContainer = screen.getByTestId("comment-container");
//   expect(commentContainer).toBeInTheDocument();
// });
