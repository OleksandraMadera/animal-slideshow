var currentAnimal = "Bear";

// Click the left arrow to trigger this function
function previousAnimal() {
  // --- ADD YOUR CODE BETWEEN THESE BRACES (Lines 5 to 16) ---
  
  
  
  
  
  
  
  
  
  
  
}



// Click the right arrow to trigger this function
function nextAnimal() {
  if (currentAnimal == "Bear") {
    currentAnimal = "Duck";
    document.getElementById("animalImage").src = "https://placehold.co/400x300?text=Duck";
    document.getElementById("animalName").innerText = "Duck";
  } 
  else if (currentAnimal == "Duck") {
    currentAnimal = "Lion";
    document.getElementById("animalImage").src = "https://placehold.co/400x300?text=Lion";
    document.getElementById("animalName").innerText = "Lion";
  } 
  else if (currentAnimal == "Lion") {
    currentAnimal = "Octopus";
    document.getElementById("animalImage").src = "https://placehold.co/400x300?text=Octopus";
    document.getElementById("animalName").innerText = "Octopus";
  } 
  else if (currentAnimal == "Octopus") {
    currentAnimal = "Monkey";
    document.getElementById("animalImage").src = "https://placehold.co/400x300?text=Monkey";
    document.getElementById("animalName").innerText = "Monkey";
  } 
  else if (currentAnimal == "Monkey") {
    currentAnimal = "Bear";
    document.getElementById("animalImage").src = "https://placehold.co/400x300?text=Bear";
    document.getElementById("animalName").innerText = "Bear";
  }
}
