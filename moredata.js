function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
}
function todos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => showTodos(data))
}

function showTodos(data){
    console.log(data);
}