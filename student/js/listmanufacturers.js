$(document).ready(function () {
    $.getJSON('manufacturers', function (data) {
        $(".manu_counter").append($('<p>There are <b>' + data.length + '</b> manufacturers in the database at the moment.</p>'));
    });
});

$(document).ready(function () {
    $.getJSON('manufacturers', function (data) {
        var table = $('<table id="allTable"></table>');
        table.append("<tr><th id='allTableth'>Name</th><th id='allTableth'>Country</th><th id='allTableth'>Founded</th></tr>");

        $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var nameCell = $('<td id="allTabletd">' + value.name + '</td>');
                var countryCell = $('<td id="allTabletd">' + value.country + '</td>');
                var foundedCell = $('<td id="allTabletd">' + value.founded + '</td>');
                row.append(nameCell);
                row.append(countryCell);
                row.append(foundedCell);
                table.append(row);
            });
        $(".manulist_container").append(table);
    });
});