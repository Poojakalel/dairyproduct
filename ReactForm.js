import React, { useState } from "react";


const ReactForm=()=>{

    const[fullName,setfullName]=useState({
        flname:'',
        cnum:'',
    });

  const inputEvent=(e)=>{
    console.log(e.target.value);
    console.log(e.target.name);
    
    const value=e.target.value;
    const name=e.target.value;

    setfullName((prevalue)=>{

        console.log(prevalue.flname);

    })
  }

  const onSubmit=(e)=>{
    e.preventDefault();
  }
  



  return(

   

    <div className="heading">

     <form onSubmit={onSubmit}>
   

      <label>Studnent Name</label><br/><br/>
      <input type="text"
      name="flName" 
      value={fullName.flname}
      placeholder="Enter your Name"
      onChange={inputEvent}/><br/><br/>
    
 
      <label for="qualification">Qualification</label>
      <select name="degree" id="degree" placeholder="Enter your Qualification"
      onChange={inputEvent}><br/><br/>

      <option value="BCS">BCS</option>
      <option value="MCS">MCS</option>
      <option value="MCA">MCA</option>
    
      
    </select>

    <br/><br/>

      <label>Contact Number</label><br/><br/>
      <input type="number" 
      name='cNum'
      
      placeholder="Enter Your Contact Number"
      onChange={inputEvent}
      value={fullName.cnum}
      /><br/><br/>

      <label>Gender</label><br/><br/>
     
      Male  <input type="radio" name="gender" value="male" placeholder="Gender"
      onChange={inputEvent}/><br/>
      Female <input type="radio" name="gender" value="female" placeholder="Gender"
      onChange={inputEvent}/><br/><br/>

      <label>Subjects</label><br/><br/>

      Marathi <input type="checkbox" onChange={inputEvent}/>
      English <input type="checkbox" onChange={inputEvent}/>
      Hindi <input type="checkbox" onChange={inputEvent}/>
      Maths <input type="checkbox" onChange={inputEvent}/><br/><br/>


     <label>Enter Your Bdate{inputEvent}</label><br/><br/>
     <input type="date" /><br/><br/>

     <label>Comment{inputEvent}</label><br/><br/>
     <input type="textarea" 
     placeholder="Comment"
     name="comment"
     onChange={inputEvent}
     value={fullName.comment}/>  <br/><br/>

     <label>Email</label>
     <input type="email"
     placeholder="Enter your email"
     name="email"
     onChange={inputEvent}
     value={fullName.email}/>

     <button>Submit</button>

      
      

     </form>
    </div>
  )
}
  
export default ReactForm;