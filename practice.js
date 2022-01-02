// load name function98655
function loadName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => showName(data))
}
// show name function
function showName(data){
    const getName = document.getElementById('nameShow');
    for(const user of data){
        const createName = document.createElement('li');
        createName.innerText = `name: ${user.name}`;
        getName.appendChild(createName);
    }
}
// load email function
function loadEmail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => showEmail(data))
}
// show email function
function showEmail(data){
    const getEmail = document.getElementById('emailShow');
    for(const emails of data){
        const createEmail = document.createElement('li');
        createEmail.innerText = `Emails: ${emails.email}` ;
        getEmail.appendChild(createEmail);
    }
} 
// comment  create
function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComment(data))
}
loadComment();
function displayComment(data){
    const getComment = document.getElementById('postComment');
    for(comment of data){
        const createComment = document.createElement('div');
        createComment.classList.add('post');
        createComment.innerHTML = `
        <h2>${comment.postId}</h2>
        <p> ${comment.body} </p>
        `;
        getComment.appendChild(createComment);
    }
}