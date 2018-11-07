$(document).ready(function () {
    $("#content").load("content.html");
});

$(document).ready(function () {
    $.each($(".menuButton"), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();
            if (!($(this).find('a').attr("href") === "index.html")) {
                $("#content").load($(this).find('a').attr("href"));
            }
            else {
                open("index.html", "_self");
            }
        });
    })
});

function Show(button_id) {
    var button_text = document.getElementById(button_id);
    var x = document.getElementById("Description");
    if (button_text.firstChild.data === "Show assignment description")
    {
        button_text.firstChild.data = "Hide assignment description";
        x.style.display = "block";
    }
    else
    {
        button_text.firstChild.data = "Show assignment description";
        x.style.display = "none";
    }
}