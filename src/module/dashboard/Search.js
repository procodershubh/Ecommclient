import React from 'react';
import { useParams } from 'react-router-dom';

const[mydata,setmydata]= useState([]);
  


  
const myapi =()=>{
  axios.get("https://fakestoreapi.com/products").then((d) => {
    console.log(d.data);
    setmydata(d.data);
  });
  
  
};
useEffect(() =>{
  myapi();
}, []);


function Search() {
  return (
    <div>Search</div>
  )
}

export default Search