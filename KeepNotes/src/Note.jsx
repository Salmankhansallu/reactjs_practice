import React from 'react';
import './index.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note=(props)=>{
    const deletenote=()=>{
       props.deleteitem(props.id);
    };
    return(
        <>
        <div className='note'>
            <h1>{props.title}</h1>
            <br></br>
            <p>{props.content}</p>
            <button className='btn'>
            <DeleteOutlineIcon className='deleteicon' onClick={deletenote}/>
            </button>
        </div>

        </>
    );
}
export default Note;