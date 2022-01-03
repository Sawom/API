const search = () => {
    const searchingItem = document.getElementById('searchInput');
    const searchingValue = searchingItem.value;
    searchingItem.value = '';
    // console.log(searchingValue);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchingValue}` ;
    fetch(url)
    .then(response => response.json())
    .then(data => displayFoods(data.meals))
}
const displayFoods = meals => {
    const getFoodSection = document.getElementById('foods');
    for(const foods of meals){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card-group" style="width: 18rem;">
            <div class="card col-md-2"> 
                <img src="${foods.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${foods.strMeal} </h5>
                    <p class="card-text"> ${foods.strCategory} </p>
                </div>
            </div>
        </div>
        `
        getFoodSection.appendChild(div);
    }
}