import React, { createContext,useEffect,useReducer} from 'react'
import BookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

export const BookContextProvider = (props)=>{
    const [books,dispatch] = useReducer(BookReducer,[],()=>{
        const localData = localStorage.getItem('book');
        return localData ? JSON.parse(localData) : [];
    })
    useEffect(()=>{
        localStorage.setItem('book',JSON.stringify(books));
    },[books])
    return (
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    );

}