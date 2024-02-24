import { useEffect, useState } from "react";
import './App.css'
import axios from 'axios'

function App(){

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})

    .then( res => {
      const output = res.data.books
      setBooks(output)
      // console.log(output)
    })

    .catch( error => {
      if(error.res.status == 404){
        console.log("Status code : 404")
        console.log("Website not found")
      }
    })

  })
  
  return(
    <div>
      {
        books.map(function(element, index){
          return(
            <div key={index}>
              <h2>{element.title}</h2>
              <div className="flex">
                <img src={element.imageLinks.smallThumbnail} alt="" />
                <p>{element.description}</p>
              </div>
              <h4>{element.authors}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;