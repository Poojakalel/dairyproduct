import React, { useState } from "react";

const ToDoList=()=>{

    const[inputList,setInputList]=useState('buy apple');
    const[Items,setItems]=useState([]);

    const itemEvents=(e)=>{
        setInputList(e.target.value)
        console.log(e.target.value);
    };

    const listOfItems=()=>{

        setItems((oldItems)=>{
            return [...oldItems,inputList];
        })

    };


    return(
        <div>
            <div className="main_div">
                <div className="center_div">
                    <h1>ToDoList</h1>
                    <input type="text" placeholder="Add a items"
                    onChange={itemEvents}/>
                    <button onClick={listOfItems}>+</button>

                    <ol>
                        {Items.map((items)=>{
                            return <li>{Items}</li>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;