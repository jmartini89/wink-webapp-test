import React from 'react';
import Card from './Card';

function SearchList({data}) {
  if (data === null) {
    return;
  }

  function getThumbnail(book) {
    return (
      (book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail)
      ? book.volumeInfo.imageLinks.thumbnail : null
    )
  }

  return (
    data.map(book => {
      return (
        <div key = {book.id}>
          <Card
            id = {book.id}
            title = {book.volumeInfo.title}
            description = {book.volumeInfo.description}
            link = {book.volumeInfo.infoLink}
            thumbnail = {getThumbnail(book)}
          />
        </div>
      )
    })
  );
}

export default SearchList;