const loadFood = () => {
    const getInput = document.getElementById('inputFood');
    const getInputValue = getInput.value;
    getInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${getInputValue} `;
    fetch(url)
    .then(response => response.json())
    .then(data => displayFood(data.meals))
}
const displayFood = meals => {
    const gfoods = document.getElementById('getFood');
    for(const food of meals){
        console.log(food);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card-group ">
            <div class="card d-inline p-4 m-4 col col-lg-2 col-md-3">
                <img  src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Food Name: ${food.strMeal}</h5>
                <p class="card-text">Category: ${food.strCategory}</p>
            </div>
            </div>
        </div>
        `;
        gfoods.appendChild(div);
    }

}