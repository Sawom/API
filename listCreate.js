// get name 
function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayName(data))
}
// get email 
function getMail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayEmail(data))
}
// display name function 
function displayName(data){
    const getName = document.getElementById('userList');
    for(const users of data){
        const createList = document.createElement('li');
        createList.innerText = `name:  ${users.name}`;
        getName.appendChild(createList);
    }
}
// display email function 
function displayEmail(data){
    const getEmail = document.getElementById('emailList');
    for(const emails of data){
        const emailList = document.createElement('li');
        emailList.innerText = `Email: ${emails.email}`;
        getEmail.appendChild(emailList);
    }
}