$(document).ready(function () {
    $.getJSON('manufacturerNames', function (data) {
        var select = $('<select name="manufacturer" required="required"></select>');
        $.each(data, function (key, value) {
            var option = $('<option value="' + value+ '">' + value + '</option>');
            select.append(option);
        });
        $(".select").append(select);
    });
});

$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();

        $.ajax({
            type:'post',
            url: 'addCar',
            data: $('form').serialize(),
            success: function () {
                if (confirm("Submission successful! Would you like to see all the cars?")) {
                    $("#content").load("listcars.html");
                }
                document.getElementById("addcar").reset();
            },
            error: function () {
                window.alert("Submission failed!");
                document.getElementById("addcar").reset();
            }
        })
    })
});