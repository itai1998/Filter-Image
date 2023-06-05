// Select all filter button and filterable cards

// Get all the buttons under .filter_buttons class
const filterButton = document.querySelectorAll(".filter_buttons button");

// Get all the .card class under .filterable_cards class
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const searchButton = document.querySelector(".search_button");
const searchInput = document.querySelector(".search_bar");

// Define the filterCards function
const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable card
    filterableCards.forEach(card => {
        // Add "hide" class to hide the card iniially
        card.classList.add("hide");
        // Check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove ("hide");
        }
    })
}

const searchFilter = e =>{
    const searchResult = searchInput.value;

    // Iterate over each filterable card
    filterableCards.forEach(card => {
        // Add "hide" class to hide the card iniially
        card.classList.add("hide");
      
        // Check if the card matches the selected filter or "all" is selected
        if(searchResult === card.dataset.name){
            card.classList.remove ("hide");
        }
    })
    searchInput.value = "";
}

// Add click event listener to each filter button
filterButton.forEach(button => button.addEventListener("click", filterCards));
searchButton.addEventListener("click", searchFilter);