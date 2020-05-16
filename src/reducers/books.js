import { GET_ALL_BOOKS, ADD_A_BOOK, UPDATE_BOOK_DETAILS } from "../actions";

const existingBooks = [
  {
    title: "Origins",
    author: "Dan Brown",
    genre: "Medical thriller",
    summary: "The fifth installment in the Robert Langdon series",
    id: 1001
  },
  {
    title: "Crisis",
    author: "Robin Cook",
    genre: "Mystery thriller",
    summary: "The terrifying story of a doctor who is the victim of a medical malpractise crisis",
    id: 1002
  }
];
var name=null;
export default function books(state = existingBooks, action) {
  
  switch (action.type) {
    
    case GET_ALL_BOOKS:
      action.name="Pranav";
      return [
        ...state,
        ...action.books,
        ...action.name
      ]
    case ADD_A_BOOK:
      return [
        action.newBook,
        ...state, 
      ]
    case UPDATE_BOOK_DETAILS: 
      const found = state.filter(_=>_.id!==action.updatedBook.id)
      found.push(action.updatedBook);
      return found
    default:
      return [
        ...state,
      ]
  }
}