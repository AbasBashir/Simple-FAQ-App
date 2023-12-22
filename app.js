

// Global Variables

// Targets all classes called content-container and creates an HTMLCollection
const collapseContainer = document.getElementsByClassName('content-container');

for (const accordion of collapseContainer) {

    accordion.addEventListener('click', function(){

        // Adds the class .active to the element that triggered, if it does not have the class
        // Removes the class .active if it is already present.
        this.classList.toggle('active');
    })
}