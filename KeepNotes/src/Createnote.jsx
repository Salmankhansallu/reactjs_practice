import React, { useState } from 'react';
import './index.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const Createnote=(props)=>{
    const [expand,setexpand]=useState(false);
    const [note,setnote]=useState({
         title:'',
         content:''
    });
    const inputevent=(event)=>{
        const {name,value}=event.target;
        setnote((prevdata)=>{
          return{
            ...prevdata,
            [name]:value
          }
        });
    }
    const addevent=()=>{
          props.passNote(note);
          setnote({
            title:"",
            content:""
          });
    }
    const expanditem=()=>{
        setexpand(true);
    }
    const backtonormal=()=>{
        setexpand(false);
    }
    return(
        <>
        <div className='main-note' onDoubleClick={backtonormal}>
            <form>
              {expand?
                <input 
                type='text' 
                name="title" 
                value={note.title} 
                onChange={inputevent} 
                placeholder='Title' 
                autoComplete='off'>
               </input>
               :null}
              <textarea 
              rows="" 
              column="" 
              name="content" 
              value={note.content} 
              onChange={inputevent} 
              placeholder="Write a Notes..." 
              onClick={expanditem} 
              >

              </textarea>
              {expand? <Button onClick={addevent} className='muibutton-root'>
                <AddIcon className='plus-sign'/>
                </Button>:null}
            </form>
        </div>
        </>

    );
}
export default Createnote;