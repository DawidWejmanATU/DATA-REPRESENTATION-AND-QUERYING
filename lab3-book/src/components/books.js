import BookItem from "./bookitem";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <Bookitem myBook={book} key={book.isbn}></Bookitem>
        }
        
    );

}

export default Books;