import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex iteams-center justify-around'>
            <div>
                <h1>
                    Books to freshen up your bookshelf
                </h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img className='w-3/4' src={bookimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;