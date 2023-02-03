fetch (`https://dummyjson.com/todos`)
.then(Response => Response.json())
 .then (data =>{
    console.log(data);
    data.todos.forEach(todos => {
        console.log(todos);

        const displaytodoselem = document.querySelector('displaytodos');
        const compelem = document.querySelector('complete');
        const incompelem = document.querySelector('incomplete');

    data.todos.forEach(todos => {
        console.log(todos);

      displaytodoselem.innerHTML +=`<li>
       <p>Task Id : ${todos.id}</p>
       <p>Task : ${todos.todo}</p>
      </li>`

     if(todos.completed === true){
        compelem.innerHTML += `<li> 
        <p>Task : ${todos.todo}</p>
        <p>Task Id: ${todos.id}</p>
        <p>Completed: ${todos.completed}</p>
        </li>`
     }
     else if(todos.completed === false){
        incompelem.innerHTML += `<li> 
        <p>Task : ${todos.todo}</p>
        <p>Task Id: ${todos.id}</p>
        <p>Completed: ${todos.completed}</p>
        </li>`
     }
    })
    
    })
    })
 