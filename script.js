// Select all filter button and filterable cards

// Get all the buttons under .filter_buttons class
const filterButton = document.querySelectorAll(".filter_buttons button");

// Get all the .card class under .filterable_cards class
const filterableCards = document.querySelectorAll(".filterable_cards .card");
const searchButton = document.querySelector(".search_button");
const searchInput = document.querySelector(".search_bar");

const popButton = document.querySelector(".popup_button");


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
   
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Store the input text in from the search bar
    const searchResult = searchInput.value;

    // Iterate over each filterable card
    filterableCards.forEach(card => {
        // Add "hide" class to hide the card iniially
        card.classList.add("hide");
      
        // Check if the text from the search bar and the card data-name matches 
        if(searchResult === card.dataset.name){
            card.classList.remove ("hide");
        }
    })

    // Empty the search bar
    searchInput.value = "";

}

const togglePopup = () =>{
    document.getElementById("popup-1").classList.toggle("active2");
}

// function togglePopup(){
//     document.getElementById("popup-1").classList.toggle("active2");
// }


// Add click event listener to each filter button
filterButton.forEach(button => button.addEventListener("click", filterCards));
searchButton.addEventListener("click", searchFilter);
popButton.addEventListener("click", togglePopup);




