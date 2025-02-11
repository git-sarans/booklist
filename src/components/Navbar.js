import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Current You have {books.length} books in your list</p>
        </div>
    )
}

export default Navbar