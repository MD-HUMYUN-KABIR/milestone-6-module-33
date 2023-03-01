function todos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => gettodos(data))
}

function gettodos(data){
    const containerdiv = document.getElementById('todos');
    for(const todo of data){
        const tododiv = document.createElement('div');
        tododiv.innerHTML = `
        <h3> title: ${todo.title} </h3>
        <p> user: ${todo.userId} </p>
        <p> Is complete: ${todo.completed === true? 'complete': 'not complete'} </p>
        `;
containerdiv.appendChild(tododiv);
    }
    
}

todos();