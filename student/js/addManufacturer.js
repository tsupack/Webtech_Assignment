$(document).ready(function () {
    today();
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
                    $(".content").load("listManufacturers.html");
                }
                document.getElementById("addManufacturer").reset();
                today();
            },
            error: function () {
                window.alert("Submission failed!");
                today();
            }
        })
    })
});

function today(){
    document.querySelector("#dateField").value = new Date().toISOString().substr(0, 10);
}