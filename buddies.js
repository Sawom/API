const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => displayBuddies(data))
}
loadBuddies()
const displayBuddies = (data) => {
    const getResult = data.results;
    const getBuddies = document.getElementById('buddies');
    for(const buddies of getResult){
        const p = document.createElement('p');
        p.innerText = ` name: ${buddies.name.title} ${buddies.name.first} ${buddies.name.last}
        Email: ${buddies.email}
        `;
        getBuddies.appendChild(p);
    }
}