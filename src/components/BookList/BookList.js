import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  outline: 1px solid tomato;
  margin-top: 10px;
`;

const ListItem = styled.li`
  background-color: teal;
  color: white;
  margin-bottom: 8px;

  /* &:hover ---> li:hover */
  &:hover {
    background-color: cornflowerblue;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

console.log('list: ', List);

function BookList({ books }) {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.id}>{book.name}</ListItem>
      ))}
    </List>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
