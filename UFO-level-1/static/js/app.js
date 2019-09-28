//get the data form the 
// from data.js
var tdata = data;
var table= d3.select("table");
table.attr("class", "table table-striped");
var tbody = d3.select("tbody");

// load the data into the table.

tdata.forEach(function(dataReport) {
    console.log(dataReport);
    var row = tbody.append("tr");

// Use d3 to update each cell values with  data.
    Object.entries(dataReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
  });
});

// filter by datetime

var submit = d3.select("#filter-btn");
var empty = d3.select("tbody")
submit.on("click", function() {
    empty.html("")
    d3.event.preventDefault();
	
// the input Element  is the datatime	
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tdata);

    var filtereddata = tdata.filter(date => date.datetime === inputValue);

    console.log(filtereddata);

    filtereddata.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
    
    // Use d3 to update each cell's values with data.
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

