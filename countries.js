const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(data => displayCountry(data));
}
loadCountries();
const displayCountry = receiveCountry => {
    const getCountry = document.getElementById('showAll');
    for(const contriesAll of receiveCountry){
        console.log(contriesAll);
        const div = document.createElement('div');
        div.classList.add('styleCountry');
        div.innerHTML = `
        <h3>Country name : ${contriesAll.name.common} </h3>
        <p> Capital city:  ${contriesAll.capital} </p>
        <button onclick="loadInfo('${contriesAll.name.common}')"> see more </button>
        ` ;
        // const h3 = document.createElement('h3');
        // h3.innerText = `country name : ${contriesAll.name.common}`;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = `capital : ${contriesAll.capital}`;
        // div.appendChild(p);
        getCountry.appendChild(div);
    }
}
// show info 
const loadInfo = name => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => showInfo(data[0]))
}
const showInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('showing');
    countryDiv.innerHTML = `
        <h4>Country name: ${country.name.common}</h4>
        <p>Population: ${country.population}</p>
        <p>Timezones: ${country.timezones}</p>
        <img width="250px" src="${country.flags.png}" alt="">
    `
}
