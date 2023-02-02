// Buisness Logic

window.addEventListener("load", function() {
  const form = document.getElementById("test");
  form.addEventListener("submit", function(event) { 
    event.preventDefault();
    const answer1 = document.querySelector("input[type=radio][name=Q1]:checked").value;
    const answer2 = document.querySelector("input[type=radio][name=Q2]:checked").value;
    const answer3 = document.querySelector("input[type=radio][name=Q3]:checked").value;
    console.log(answer1, answer2, answer3)
    event.preventDefault();
// UI Logic

event.preventDefault();
let results;
    if (answer1 === "1" && answer2 === "2" && answer3 === "2"){
      results = "Goodboy would love you and cuddle with you all day!"
    } else {
      results = "Goodboy would love you dearly, but he would probably need space after a little bit"
    }

    document.getElementById("output").innerText = results;
  })})