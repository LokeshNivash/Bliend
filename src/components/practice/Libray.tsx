import { useState } from "react"

interface Book{
    id:string,
    bookName:string,
    bookAuthor:string
}


const listOfBooks:Book[]=[{
    id:"1",
    bookName:"Jack",
    bookAuthor:"William"
},
{
    id:"2",
    bookName:"Pigeon",
    bookAuthor:"Micheal"
},
{
    id:"3",
    bookName:"Pigeon",
    bookAuthor:"Micheal"
},
{
    id:"4",
    bookName:"Pigeon",
    bookAuthor:"Micheal"
}
]


const Libray = ()=>{
    const [books,setBooks]=useState<Book[]>(listOfBooks)

    const removeBook = () =>{
        const alteredbooks=[...books]
        // alteredbooks[books.length-1]={
        //     id:"new id",
        //     bookName:"new book",
        //     bookAuthor:"new author"
        // }
        // setBooks(alteredbooks)
        setBooks(oldBooks=> oldBooks.filter((book,idx)=>idx!=books.length-1))
    }

    const updateBook = (id:string) =>{
        const alteredbooks=[...books]
        const gotBooks = alteredbooks.map(book=>{
            if (book.id==id){
                //need to update the book
                const updatedBook:Book={
                    id:book.id,
                    bookName:"updated Book Name",
                    bookAuthor:"updated Book Author"
                }
                return updatedBook
            }
            return book
        })
        
        setBooks(gotBooks)
    }


    return <>
    <h1 style={{textAlign:'center'}}>List of Books</h1>
        {books.map((book,idx)=>{
            return <div style={{textAlign:'center'}}>
            <h1>{book.id}</h1>
            <div>
                <p>Title: {book.bookName}</p>
                <p>Author: {book.bookAuthor}</p>
                <button onClick={()=>{updateBook(book.id)}}>Update Book</button>
            </div>
            </div>
        })}

    </> 
}

export default Libray