
const myButton = document.getElementById('submitButton');
const input = document.getElementById('Country').value;

if (myButton && input){
  // Adding a click event listener
  myButton.addEventListener('click', function() {
    getCountries(input);
  });

  async function getCountries(Country) {
  const response = await fetch('https://restcountries.com/v3.1/name/'+Country+'');
  const countries = await response.json();
  console.log(countries);
}

  }