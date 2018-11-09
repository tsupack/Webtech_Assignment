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
            },
            error: function () {
                window.alert("Submission failed!");
            }
        })
    })
});