const kanyeCall = () => {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => displayQuote(data))
}
// display function
const displayQuote = data => {
    const getQuote = document.getElementById('kenya');
    const createQuote = document.createElement('p');
    createQuote.innerText = data.quote;
    getQuote.appendChild(createQuote);
    // console.log(createQuote);
}