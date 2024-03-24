// Check if document is defined and the button element exists
if (typeof document !== 'undefined') {
  const myButton = document.getElementById('submitButton');

  if (myButton) {
    // Adding a click event listener
    myButton.addEventListener('click', function() {
      const input = document.getElementById('Country').value;
      getCountries(input);
    });

    async function getCountries(Country) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${Country}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const countries = await response.json();
        console.log(countries);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    
  }
}
