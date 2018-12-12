$(document).ready(function () {
    $.getJSON('cars', function (data) {
        $(".car_counter").append($('<p>There are <b>' + data.length + '</b> cars in the database at the moment.</p>'));
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
            lister(data);
        });
    }
}

function lister(data){
    var table = $('<table id="allTable"></table>');
    table.append("<tr><th id='allTableth'>Name</th><th id='allTableth'>Consumption</th><th id='allTableth'>Color</th><th id='allTableth'>Manufacturer</th><th id='allTableth'>Available</th><th id='allTableth'>Year</th><th id='allTableth'>Horsepower</th></tr>");
    $.each(data, function (key, value) {
        var row = $('<tr></tr>');
        var nameCell = $('<td id="allTabletd">' + value.name + '</td>');
        var consumptionCell = $('<td id="allTabletd">' + value.consumption + '</td>');
        var colorCell = $('<td id="allTabletd">' + value.color + '</td>');
        var manufacturerCell = $('<td id="allTabletd">' + value.manufacturer + '</td>');
        var availableCell = $('<td id="allTabletd">' + value.available + '</td>');
        var yearCell = $('<td id="allTabletd">' + value.year + '</td>');
        var horsepowerCell = $('<td id="allTabletd">' + value.horsepower + '</td>');
        row.append(nameCell);
        row.append(consumptionCell);
        row.append(colorCell);
        row.append(manufacturerCell);
        row.append(availableCell);
        row.append(yearCell);
        row.append(horsepowerCell);
        table.append(row);
    });
    $(".carlist_container").append(table);
}
