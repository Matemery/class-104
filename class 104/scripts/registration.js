const pets=[
    {    name:"Scooby"
        ,age:4
        ,breed:"Great Dane"
        ,service: "Nail Trim"
        ,gender:"Male"
    },
    {    name:"Astro"
        ,age:5
        ,breed:"mixed"
        ,service:"Hair Cut"
        ,gender:"Male"
    },
    {    name:"Pluto"
        ,age:6
        ,breed:"great Dane"
        ,service:"Full Treatment"
        ,gender:"Male"
    }

];
document.addEventListener("DOMContentLoaded", displayPetNames);
function displayPetNames() {
  const petNamesList = document.getElementById("pet-names");
  pets.forEach(function (pet) {
          const listItem = document.createElement("li");
          listItem.textContent = pet.name;
          petNamesList.appendChild(listItem);
      });
}



//setTimeout(() => {
//    pets.push(""); 
//    updateArrayDisplay(); 
//}, 2000); 
//setTimeout(() => {
//    pets.splice(1, 1); 
//    updateArrayDisplay(); 
//}, 4000);