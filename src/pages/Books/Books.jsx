import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';



const Books = ({ book }) => {
    // console.log(book);
    const { bookName, author, bookId, image, rating, tags } = book
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border-4 border-gray-200 gap-5">
                <figure>
                    <img className='h-[166px] '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    {
                        tags.map((tag => <button className='btn btn-primary'>{tag}</button>))
                    }
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{author}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Books;