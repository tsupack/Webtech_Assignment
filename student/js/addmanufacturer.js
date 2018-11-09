$(document).ready(function () {
    document.querySelector("#date_field").value = new Date().toISOString().substr(0, 10);
});

$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();

        $.ajax({
            type:'post',
            url: 'addManufacturer',
            data: $('form').serialize(),
            success: function () {
                if (confirm("Submission successful! Would you like to see all the manufacturers?")) {
                    $("#content").load("listmanufacturers.html");
                }
            },
            error: function () {
                window.alert("Submission failed!");
            }
        })
    })
});