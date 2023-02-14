// Get the current date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// Set the date in the HTML
document.getElementById("date").innerHTML = date;

// Load the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get the data for the current date
        var levels = data[date];

        // Set the values in the HTML
        document.getElementById("value1").innerHTML = levels["Hoogwater 1"];
        document.getElementById("value2").innerHTML = levels["m TAW"];
        document.getElementById("value3").innerHTML = levels["Laagwater 1"];
        document.getElementById("value4").innerHTML = levels["m TAW"];
        document.getElementById("value5").innerHTML = levels["Hoogwater 2"];
        document.getElementById("value6").innerHTML = levels["m TAW"];
        document.getElementById("value7").innerHTML = levels["Laagwater 2"];
        document.getElementById("value8").innerHTML = levels["m TAW"];
    });
