// Javascript
// Initial array
let myArray = ["Apple", "Banana", "Orange", "Grape"];

// Function to update the HTML display
function updateArrayDisplay() {
    const arrayList = document.getElementById("array-list");
    const arrayCount = document.getElementById("array-count");

    // Clear existing list items
    arrayList.innerHTML = "";

    // Populate the list with array elements
    myArray.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        arrayList.appendChild(listItem);
    });

    // Update the count
    arrayCount.textContent = myArray.length;
}

// Call the function initially to display the array and count
updateArrayDisplay();

// Example of modifying the array and updating the display in real-time
// You can call updateArrayDisplay() whenever myArray changes
setTimeout(() => {
    myArray.push("Mango"); // Add a new element
    updateArrayDisplay(); // Update the display
}, 2000); // After 2 seconds

setTimeout(() => {
    myArray.splice(1, 1); // Remove an element
    updateArrayDisplay(); // Update the display
}, 4000); // After 4 seconds