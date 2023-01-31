const createTodo=async()=>{

let options={
    method:"POST",
    Headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1,
    }),

    
}

let p=await fetch('https://jsonplaceholder.typicode.com/posts',options)
let response=await p.json()
return response
}

const mainFunc=async()=>{
    let todo=createTodo()
    console.log(todo)
}

mainFunc()


 
