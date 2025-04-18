import React, { Component } from 'react';
import {
    createBrowserRouter,

} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/Book/BookDetails/BookDetails';
import Readlist from '../component/Readlist/Readlist';



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "readlist",
                Component: Readlist
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch('book.json'),
                Component: BookDetails
            }
        ]
    },
]);

