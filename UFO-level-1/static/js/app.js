// from data.js
var tableData = data;
//Create a Table with all the Data
var tbody = d3.select("tbody");
tableData.forEach((data) => {
  var row = tbody.append("tr");
  Object.entries(data).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});
});
//Button
var button = d3.select("#filter-btn");

button.on("click", function() {

  //Remove Previous Table
  tbody.html("");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //Filtered Data
  var filteredData = tableData.filter(data => data.datetime === inputValue);

  //Add Filtered Table
  filteredData.forEach((data) => {
          var row = tbody.append("tr");
          Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
      });
  });
});

