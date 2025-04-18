import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Book = () => {
    const [allBooks, setBooks] = useState([]);
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-2xl'>Book</h1>
            <div className='grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    allBooks.map((singlebook) => <Books key={singlebook.id} book={singlebook}></Books>)
                }
            </div>
        </div>
    );
};

export default Book;