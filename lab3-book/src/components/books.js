import BookItem from "./bookItem";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
          {/*returning books from bookitem*/}

        }
        
    );

}

export default Books;
//exporting bookitem function and parameter!!