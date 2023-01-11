const ageOne = document.getElementById('ageOne');
const ageTwo = document.getElementById('ageTwo');
const result = document.getElementById('result');

function difference() {
    const difference = ageOne.value - ageTwo.value;
    result.innerHTML = "The difference betwenn us is " + difference + " years";
}