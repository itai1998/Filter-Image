// Select all filter button and filterable cards

// Get all the buttons under .filter_buttons class
const filterButton = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
const searchButton = document.querySelector(".search_button");
const searchInput = document.querySelector(".search_bar");
const popButton = document.querySelectorAll(".popup_button");
const selectedBackground = document.getElementById("BackgroundColor");



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


const togglePopup = (button) =>{
    document.getElementById("popup-1").classList.toggle("active2");
  
    // Pop a correct picture 
    const pictureElement = document.getElementById("picture");
    if(button.id === "phone1"){
        pictureElement.src = "images/phone-1.jpg";
    }else if(button.id === "phone2"){
        pictureElement.src = "images/phone-2.jpeg";
    }else if(button.id === "cloth1"){
        pictureElement.src = "images/cloth-1.webp";
    }else if(button.id === "cloth2"){
        pictureElement.src = "images/cloth-2.jpg";
    }else if(button.id === "cloth3"){
        pictureElement.src = "images/cloth-3.jpg";
    }else if(button.id === "shoe1"){
        pictureElement.src = "images/shoe-1.webp";
    }else if (button.id === "shoe2"){
        pictureElement.src = "images/shoe-2.avif";
    }
}

const toggleClose = () =>{
    document.getElementById("popup-1").classList.toggle("active2");
}

const changeBackground = () =>{

    if(selectedBackground.value==="pink"){
        document.body.style.backgroundColor = "#c7bacb";
    }else if(selectedBackground.value==="blue"){
        document.body.style.backgroundColor = "#5daecb";
    }else{
        document.body.style.backgroundColor = "#42b38b";
    }
}


// Click Action
filterButton.forEach(button => button.addEventListener("click", filterCards));
searchButton.addEventListener("click", searchFilter);
popButton.forEach(button => button.addEventListener("click", function() {
    togglePopup(this); // Pass the button element as an argument
  }));

selectedBackground.addEventListener("change", changeBackground);






