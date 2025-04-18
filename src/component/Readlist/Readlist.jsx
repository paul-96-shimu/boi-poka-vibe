import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDb';
import Books from '../../pages/Books/Books';


const Readlist = () => {
    const [readlist, setReadlist] = useState([]);
    const [sort, setSort] = useState("")

    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        if (!data) return;
        const storeBook = getStoreBook();
        const convertedId = storeBook.map(id => parseInt(id));
        const savedBook = data.filter(book => convertedId.includes(book.bookId));

        setReadlist(savedBook);

    }, [data])

    const handleSort = (sort) => {
        setSort(sort)
    }



    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sort By:{sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Readlist</Tab>
                    <Tab>WishLIst</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book a read {readlist.length}</h2>
                    {
                        readlist.map((book) => <Books key={book.bookId} book={book}></Books>)


                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );

}

export default Readlist;
