// from data.js

var tableData = data;

// YOUR CODE HERE!
// Gather references to the body element, input field and button

    var $tbody = document.querySelector("div > tbody");
    var $dateInput = document.querySelector("#date");
    // var $cityInput = document.querySelector("#city");
    // var $stateInput = document.querySelector("#state");
    // var $countryInput = document.querySelector("#country");
    // var $shapeInput = document.querySelector("#shape");
    var $searchBtn = document.querySelector("#search");
    var $resetBtn = document.querySelector("#reset");

// Add event listener to the searchButton and resetButton, call functions when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

// Set filtered data to data set
var filteredData = dataSet;

// Render the filtered data
function renderTable() {
  
 
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Gather current sighting object and its fields
    var sighting = filteredData[i];
    var fields = Object.keys(sighting);
    // Create a new row in the body, set the index to i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // Create a new cell for every field in the sight object
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {  
  // search items with user terms by removing leading and trailing whitespace

  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = dataSet.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  };
  // //var filterCity = $cityInput.value.trim().toLowerCase();
  // if (filterCity != "") {
  //   filteredData = filteredData.filter(function (sighting) {
  //     var sightingCity = sighting.city;
  //     return sightingCity === filterCity;
  //   });
  // };
  // var filterState = $stateInput.value.trim().toLowerCase();
  // if (filterState != "") {
  //   filteredData = filteredData.filter(function (sighting) {
  //     var sightingState = sighting.state;
  //     return sightingState === filterState;
  //   });
  // };
  // var filterCountry = $countryInput.value.trim().toLowerCase();
  // if (filterCountry != "") {
  //   filteredData = filteredData.filter(function (sighting) {
  //     var sightingCountry = sighting.country;
  //     return sightingCountry === filterCountry;
  //   });
  // };
  // var filterShape = $shapeInput.value.trim().toLowerCase();
  // if (filterShape != "") {
  //   filteredData = filteredData.filter(function (sighting) {
  //     var sightingShape = sighting.shape;
  //     return sightingShape === filterShape;
  //   });
  // };
  renderTable();
};


// Reset the data after a search

function handleResetButtonClick() {
    filteredData = dataSet;
    $dateInput.value = "";
    // $cityInput.value = "";
    // $stateInput.value = "";
    // $countryInput.value = "";
    // $shapeInput.value = "";
    renderTable();
}

// Render table
renderTable();