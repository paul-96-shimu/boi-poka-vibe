import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToDB } from '../../../utility/addToDb';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const allBooks = useLoaderData();
    const book = allBooks.find(book => book.bookId === bookId);
    const { bookName, review, image } = book;
    const handleRead = id => {

        addToDB(id)
    }


    return (
        <div>
            <img src={image} alt="" />
            <h5>{bookName}</h5>
            <p>{review}</p>
            <button onClick={() => handleRead(id)} className='btn btn-primary'>Read</button>
            <button className='btn btn-primary'>WishList</button>
        </div>
    );
};


export default BookDetails;