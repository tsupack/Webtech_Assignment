$(document).ready(function () {
    $.getJSON('cars', function (data) {
        $(".carCounter").append($('<p>There are <b>' + data.length + '</b> cars in the database at the moment.</p>'));
    });
});

$(document).ready(function () {
    $.getJSON('manufacturerNames', function (data) {
        var select = $('<select id="selector"></select>');
        var optionAll = $('<option value="all">All</option>');
        select.append(optionAll);
        $.each(data, function (key, value) {
            var option = $('<option value="' + value+ '">' + value + '</option>');
            select.append(option);
        });
        $(".select").append(select);
    });
});

function list(){
    $("table").remove();
    var e = document.getElementById("selector");
    var selectorValue = e.options[e.selectedIndex].value;
    document.cookie='name=' + selectorValue;
    if (selectorValue === 'all') {
        $.getJSON('cars', function (data) {
           lister(data);
        });
    }
    else{
        $.getJSON('/manufacturer', function (data) {
            if (data.length>0){
                lister(data);
            }
            else{
                window.alert("There are no cars registered to this manufacturer so far!")
            }
        });
    }
}

function lister(data){
    var table = $('<table id="allTable"></table>');
    table.append("<tr>" +
        "<th id='allTableTableHeader'>Name</th>" +
        "<th id='allTableTableHeader'>Consumption</th>" +
        "<th id='allTableTableHeader'>Color</th>" +
        "<th id='allTableTableHeader'>Manufacturer</th>" +
        "<th id='allTableTableHeader'>Available</th>" +
        "<th id='allTableTableHeader'>Year</th>" +
        "<th id='allTableTableHeader'>Horsepower</th>" +
        "</tr>");
    $.each(data, function (key, value) {
        var row = $('<tr></tr>');
        var nameCell = $('<td id="allTableTableDimension">' + value.name + '</td>');
        var consumptionCell = $('<td id="allTableTableDimension">' + value.consumption + '</td>');
        var colorCell = $('<td id="allTableTableDimension">' + value.color + '</td>');
        var manufacturerCell = $('<td id="allTableTableDimension">' + value.manufacturer + '</td>');
        var availableCell = $('<td id="allTableTableDimension">' + value.available + '</td>');
        var yearCell = $('<td id="allTableTableDimension">' + value.year + '</td>');
        var horsepowerCell = $('<td id="allTableTableDimension">' + value.horsepower + '</td>');
        row.append(nameCell);
        row.append(consumptionCell);
        row.append(colorCell);
        row.append(manufacturerCell);
        row.append(availableCell);
        row.append(yearCell);
        row.append(horsepowerCell);
        table.append(row);
    });
    $(".carListContainer").append(table);
}
