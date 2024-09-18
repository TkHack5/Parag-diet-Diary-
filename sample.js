const foodCalories = {
    "easy hard-boiled eggs": 72,
    "chicken caesar salad": 295,
    "fresh tomato pasta": 469,
    "fluffy pancakes": 350,
    "vegetable omelette": 280,
    "berry smoothie": 220,
    "avocado toast": 320,
    "yogurt parfait": 270,
    "egg benedict": 410,
    "smoothie bowl": 350,
    "chia pudding": 290,
    "whole grain cereal": 220,
    "breakfast burrito": 400,
    "fruit salad": 180,
    "toast with toppings": 320,
    "paneer butter masala": 350,
    "chole bhature": 450,
    "masala dosa": 300,
    "chicken tikka masala": 350,
    "biryani": 400,
    "butter chicken": 490,
    "dal makhani": 320,
    "pulao": 290,
    "aloo paratha": 300,
    "samosa": 250,
    "rajma chawal": 350,
    "pani puri": 150,
    "gulab jamun": 300,
    "pav bhaji": 400,
    "vada pav": 300,
    "kadai paneer": 380,
    "tandoori chicken": 270,
    "aloo gobi": 200,
    "palak paneer": 340,
    "malai kofta": 400
};

const foodProtein = {
    "easy hard-boiled eggs": 6.3,
    "chicken caesar salad": 31.5,
    "fresh tomato pasta": 17.5,
    "fluffy pancakes": 48.0,
    "vegetable omelette": 12.0,
    "berry smoothie": 2.0,
    "avocado toast": 34.0,
    "yogurt parfait": 35.0,
    "egg benedict": 33.0,
    "smoothie bowl": 12.0,
    "chia pudding": 25.0,
    "whole grain cereal": 6.0,
    "breakfast burrito": 20.0,
    "fruit salad": 0.5,
    "toast with toppings": 15.0,
    "paneer butter masala": 12,
    "chole bhature": 12,
    "masala dosa": 5,
    "chicken tikka masala": 30,
    "biryani": 25,
    "butter chicken": 35,
    "dal makhani": 10,
    "pulao": 8,
    "aloo paratha": 8,
    "samosa": 5,
    "rajma chawal": 12,
    "pani puri": 2,
    "gulab jamun": 4,
    "pav bhaji": 8,
    "vada pav": 6,
    "kadai paneer": 15,
    "tandoori chicken": 40,
    "aloo gobi": 5,
    "palak paneer": 12,
    "malai kofta": 10
};

function calculateCalories() {
    // Get user inputs for meals
    let breakfast = document.getElementById('breakfast').value.toLowerCase();
    let lunch = document.getElementById('lunch').value.toLowerCase();
    let dinner = document.getElementById('dinner').value.toLowerCase();

    // Split items by commas (in case user enters multiple items)
    let breakfastItems = breakfast.split(',').map(item => item.trim().toLowerCase());
    let lunchItems = lunch.split(',').map(item => item.trim().toLowerCase());
    let dinnerItems = dinner.split(',').map(item => item.trim().toLowerCase());

    // Initialize total calories and protein
    let totalCalories = 0;
    let totalProtein = 0;

    // Helper function to sum calories and protein for each meal
    function addNutrients(mealItems) {
        mealItems.forEach(item => {
            if (foodCalories[item]) {
                totalCalories += foodCalories[item];
            } else {
                console.log(`Calorie info not found for: ${item}`);
            }
            if (foodProtein[item]) {
                totalProtein += foodProtein[item];
            } else {
                console.log(`Protein info not found for: ${item}`);
            }
        });
    }

    // Add calories and protein for each meal
    addNutrients(breakfastItems);
    addNutrients(lunchItems);
    addNutrients(dinnerItems);

    // Update total calories and protein in the DOM
    document.getElementById('total-calories').innerText = totalCalories;
    document.getElementById('total-protein').innerText = totalProtein.toFixed(1); // Rounded to 1 decimal
}


document.getElementById('meal-plan-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    calculateCalories();
});
