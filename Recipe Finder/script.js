const recipes = [
    {
        title: "Spaghetti Bolognese",
        ingredients: "Spaghetti, minced meat, tomato sauce"
    },
    {
        title: "Chicken Curry",
        ingredients: "Chicken, curry powder, coconut milk"
    }
];

document.getElementById('find').addEventListener('click', () => {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchQuery));
    displayRecipes(filteredRecipes);
});

function displayRecipes(filteredRecipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
    filteredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `<h3>${recipe.title}</h3><p>Ingredients: ${recipe.ingredients}</p>`;
        recipesDiv.appendChild(recipeDiv);
    });
}
