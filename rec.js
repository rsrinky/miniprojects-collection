const recipes = {
    pizza: {
        title: "Pizza",
        description: "A delicious pizza made with a crispy crust, fresh tomato sauce, mozzarella cheese, and your favorite toppings like pepperoni, mushrooms, or olives."
    },
    pasta: {
        title: "Pasta",
        description: "A classic Italian dish made with spaghetti, creamy Alfredo sauce, and topped with freshly grated Parmesan cheese. Add chicken or vegetables for extra flavor."
    },
    burger: {
        title: "Burger",
        description: "A juicy beef patty, topped with cheese, lettuce, tomato, pickles, and a special sauce, all sandwiched between a soft, toasted bun."
    },
    sandwich:{
        title:"Sandwich",
        description:"Add boiled potato slices on one bread slice and layer the sliced vegetables on it. Once you are done, add cheddar cheese on the vegetables, place the other slice of bread on top of it, and put the sandwich in your Crompton Electric Sandwich Grill to let it cook for a while."
    },
    salad: {
        title: "Salad",
        description: "Start by chopping 6 cups of romaine lettuce and placing it in a large bowl. Add 4 hard-boiled eggs, cut into quarters. Next, add 1 cup of sliced cucumber, 1 cup of halved cherry tomatoes, and 1 cup of sliced ham to the bowl. Toss everything together well and top with your favorite salad dressing. Serve immediately for a fresh and delicious meal."
    }, 
};

function showRecipe(recipeName) {
    // Check if the recipe exists
    const recipe = recipes[recipeName];

    if (recipe) {
        // If the recipe exists, show the title and description
        document.getElementById('recipe-title').innerText = recipe.title;
        document.getElementById('recipe-description').innerText = recipe.description;
    } else {
        // If the recipe does not exist, show a default message
        document.getElementById('recipe-title').innerText = "Recipe not found";
        document.getElementById('recipe-description').innerText = "Sorry, we couldn't find the recipe you're looking for.";
    }

    // Hide recipe list and show recipe details
    document.getElementById('recipe-list').style.display = 'none';
    document.getElementById('recipe-details').style.display = 'block';
}

function goBack() {
    // Show recipe list and hide recipe details
    document.getElementById('recipe-list').style.display = 'flex';
    document.getElementById('recipe-details').style.display = 'none';
}
