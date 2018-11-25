$(document).ready(function () {
    $.getJSON('cars', function (data) {
        var count = 0;
        $.each(data, function () {
            count++;
        });
        var p = $('<p>There are <b>' + count + '</b> cars in the database at the moment.</p>');
        $(".car_counter").append(p);
    });
});

$(document).ready(function () {
    $.getJSON('manufacturerNames', function (data) {
        var select = $('<select id="selector"></select>');
        var option_all = $('<option value="all">All</option>');
        select.append(option_all);
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
    var selector_value = e.options[e.selectedIndex].value;
    document.cookie='name=' + selector_value;

    if (selector_value === 'all') {
        $.getJSON('cars', function (data) {
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
        });
    }
    else{
        $.getJSON('/manufacturer', function (data) {
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
        });
    }
}
