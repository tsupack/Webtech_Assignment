$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();

        $.ajax({
            type:'post',
            url: 'addCar',
            data: $('form').serialize(),
            success: function () {
                window.alert("Submission successful!");
                //promttal mehet majd a listcars.html
            },
            error: function () {
                window.alert("Submission failed!");
            }
        })
    })
});