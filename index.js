const ageInput = document.getElementById("ageInput");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculateBtn = document.getElementById("calculateBtn");
const resultText = document.getElementById("calories");

//BMR MALE: 10*weight + 6.25*height - 5*age + 5
//BMR FEMALE: 10*weight + 6.25*height - 5*age -161

function calculateBmr() {

   let userAgeVal = parseFloat(ageInput.value);
   let userHeightVal = parseFloat(height.value);
   let userWeightVal = parseFloat(weight.value);

   let bmr;

   if(isNaN(userAgeVal) || isNaN(userHeightVal) || isNaN(userWeightVal)) {
      resultText.textContent = "Please enter all Informations for Age, Height and Weight!";
      return;
   }
   
   if(maleInput.checked) {
    bmr = 10 * userWeightVal + 6.25 * userHeightVal - 5 * userAgeVal + 5;
    resultText.textContent = "Your BMR is: " + bmr.toFixed(2) + " Calories per day!";
   } else if(femaleInput.checked) {
    bmr = 10 * userWeightVal + 6.25 * userHeightVal - 5 * userAgeVal - 161;
    resultText.textContent = "Your BMR is: " + bmr.toFixed(2) + " Calories per day!";
   } else {
      resultText.textContent = "Please select a Gender for Calculation!";
      return;
   }

}

calculateBtn.addEventListener("click", calculateBmr);

document.addEventListener("keydown", (event) => {
   if(event.key === 'Enter') {
      calculateBmr();
   }
});