
const myButton = document.getElementById('submitButton');
if (myButton){
  // Adding a click event listener
  myButton.addEventListener('click', function() {
  const input = document.getElementById('Country');
  getCountries(input);
  });

  async function getCountries(Country) {
  const response = await fetch('https://restcountries.com/v3.1/name/'+Country+'');
  const countries = await response.json();
  console.log(countries);
}

  }