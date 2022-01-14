import React, { useState,useEffect} from 'react';
import {IoMdAdd} from 'react-icons/io';
import img from "assets/images/headerBg.jpg";
const Write = () => {
    const [text,setText] = useState({
        title:'',
        des:''
    });
    const [arr,setArr]= useState([])
    // const arr = []
    const json = JSON.stringify(arr)
    const subMit =(e)=>{
        setArr([...text,text])
        // arr.push(text)
        console.log(arr,'arr');
        
        localStorage.setItem('item',json)        
        e.preventDefault()
    }
    // useEffect(()=>{
    // },[arr])
    
    return (
        <div className="write_component">
            <img className="writeImg" src={img} alt="" />
            <form onSubmit={subMit} action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="add"><IoMdAdd /></label>
                    <input type="file" id="add" style={{display:"none"}} />
                    <input onChange={(e)=>setText({...text,[e.target.name]:e.target.value})} type="text" placeholder='Title' id="title" autoFocus={true} name="title" />
                </div>
                <div className="writeFormGroup">
                    <textarea onChange={(e)=>setText({...text,[e.target.name]:e.target.value})} placeholder="Tell your story..." type="text" name="des" id="" className='writeInput writeText'></textarea>
                </div>
                {/* <button onClick={subMit} className="writeSubmit">Publish</button> */}
                <input className="writeSubmit" type="submit" value="Publish" />
            </form>
        </div>
    );
};

export default Write;