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
        ,breed:"Great Dane"
        ,service:"Full Treatment"
        ,gender:"Male"
    }

];
document.addEventListener("DOMContentLoaded", displayPetNames);
document.addEventListener("DOMContentLoaded", displayPetAge);
document.addEventListener("DOMContentLoaded", displayPetBreed);
document.addEventListener("DOMContentLoaded", displayPetGender);
document.addEventListener("DOMContentLoaded", displayPetService);
function displayPetNames() {
  const petNamesList = document.getElementById("pet-names");
  pets.forEach(function (pet) {
          const listItem = document.createElement("li");
          listItem.textContent = pet.name;
          petNamesList.appendChild(listItem);
      });
}
function displayPetAge() {
  const petAgeList = document.getElementById("pet-age");
  pets.forEach(function (pet) {
          const listItem = document.createElement("li");
          listItem.textContent = pet.age;
          petAgeList.appendChild(listItem);
      });
}
function displayPetBreed() {
  const petBreedList = document.getElementById("pet-breed");
  pets.forEach(function (pet) {
          const listItem = document.createElement("li");
          listItem.textContent = pet.breed;
          petBreedList.appendChild(listItem);
      });
}
function displayPetGender() {
  const petGenderList = document.getElementById("pet-gender");
  pets.forEach(function (pet) {
          const listItem = document.createElement("li");
          listItem.textContent = pet.gender;
          petGenderList.appendChild(listItem);
      });
}
function displayPetService() {
  const petServiceList = document.getElementById("pet-service");
  pets.forEach(function (pet) {
          const listItem = document.createElement("li");
          listItem.textContent = pet.service;
          petServiceList.appendChild(listItem);
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