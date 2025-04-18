import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToDB } from '../../../utility/addToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const allBooks = useLoaderData();
    const book = allBooks.find(book => book.bookId === bookId);
    const { bookName, review, image } = book || {};

    const handleRead = id => {

        MySwal.fire({
            title: <p>Hello World</p>,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
        }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })

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