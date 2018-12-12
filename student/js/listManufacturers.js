$(document).ready(function () {
    $.getJSON('manufacturers', function (data) {
        $(".manufacturerCounter").append($('<p>There are <b>' + data.length + '</b> manufacturers in the database at the moment.</p>'));
    });
});

$(document).ready(function () {
    $.getJSON('manufacturers', function (data) {
        var table = $('<table id="allTable"></table>');
        table.append("<tr>" +
            "<th id='allTableTableHeader'>Name</th>" +
            "<th id='allTableTableHeader'>Country</th>" +
            "<th id='allTableTableHeader'>Founded</th>" +
            "</tr>");

        $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var nameCell = $('<td id="allTableTableDimension">' + value.name + '</td>');
                var countryCell = $('<td id="allTableTableDimension">' + value.country + '</td>');
                var foundedCell = $('<td id="allTableTableDimension">' + value.founded + '</td>');
                row.append(nameCell);
                row.append(countryCell);
                row.append(foundedCell);
                table.append(row);
            });
        $(".manufacturerListContainer").append(table);
    });
});