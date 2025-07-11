const regionSelect = document.getElementById("regionSelect");
const searchInput = document.getElementById("searchbar");
const countriesList = document.getElementById("countriesList");
const themeToggler = document.getElementById("themeToggle");
const countryBoxAll = document.querySelectorAll(".countryBox");

// async function getWorld(url) {
//   const data = await fetch(url);
//   const response = await data.json();

//   return response.map((country) => {
//     return {
//       name: country.name.common,
//       flag: country.flags.svg,
//       flags: country.flags,
//       population: country.population,
//       region: country.region,
//       capital: country.capital ? country.capital[0] : "No Capital",
//     };
//   });
// }

let worldData = countriesData;

// getWorld(`https://restcountries.com/v3.1/all`).then((data) => {
//   worldData = data;
//   countriesListVisualization(filteredCountriesData(searchInput.value));
// });

// countriesList manipulation code here (sorted Countriesdata Object)
const filteredCountriesData = (searchtext) => {
  searchtext = searchtext.toLowerCase();
  return worldData
    .filter((country) => {
      return country.name.toLowerCase().includes(searchtext);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
};
// const sortedCountriesData = (region) => {
//   return region === "All"? filteredCountriesData(inputValue) : filteredCountriesData(inputValue).filter((country) => {
//     return country.region === region;
//   });
// };
const sortedCountriesData = (region, searchtext) => {
  const filtered = filteredCountriesData(searchtext);
  return region === "All"
    ? filtered
    : filtered.filter((country) => country.region === region);
};

// countriesList visualization
const countriesListVisualization = (sortedCountriesData) => {
  countriesList.textContent = "";
  sortedCountriesData.forEach((country) => {
    countriesList.innerHTML += `
      <div class="countryBox">
        <img src="${country.flag}" id="countryImg" alt="Flag of ${
      country.name
    }">
        <div class="countryInfo">
          <p id="countryName"> <b>${country.name}</b></p>
          <p><b>Population</b>: ${country.population.toLocaleString()}</p>
          <p id="countryLang"> <b>Region</b>: ${country.region}</p>
          <p><b>Capital</b>: ${country.capital}</p>
        </div>
      </div>`;
  });
};

searchInput.addEventListener("input", () => {
  const inputValue = searchInput.value;
  countriesListVisualization(filteredCountriesData(inputValue));
});
// select region
regionSelect.addEventListener("input", (event) => {
  const regionValue = regionSelect.value;
  countriesListVisualization(
    sortedCountriesData(regionValue, searchInput.value)
  );
});

countriesListVisualization(filteredCountriesData(searchInput.value));

// color theme switcher
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggler.querySelector("i").classList.toggle("fa-solid");
  themeToggler.querySelector("i").classList.toggle("fa-regular");
});

countryBoxAll.forEach((countryBox)=>{
  countryBox.addEventListener("click", () => {});
})