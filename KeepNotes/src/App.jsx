import React, { useState } from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';
const App=()=>{
    const [additem,setadditem]=useState([]);
   const addnote=(note)=>{
    // alert("hello");
    setadditem((prevdata)=>{
        return [...prevdata,note];
    })
   }
  const onDelete=(id)=>{
    setadditem((olditem)=>
     olditem.filter((curitem,index)=>{
        return index!==id;
     })
    );
  };

    return (
        <>
         <Header/>
         <Createnote passNote={addnote}/>
        
         {
            additem.map((val,index)=>{
                return (
                    <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteitem={onDelete}
                    />
                    
                )
            })
         }
         
         <Footer/>
        </>

    );
}
export default App;