$(document).ready(function () {
    $(".content").load("content.html");
});

$(document).ready(function () {
    $.each($(".menuButton"), function (menuBarIndex, menuBarValue) {
        $(menuBarValue).click(function (event) {
            event.preventDefault();
            if (!($(this).find('a').attr("href") === "index.html")) {
                $(".content").load($(this).find('a').attr("href"));
            }
            else {
                open("index.html", "_self");
            }
        });
    })
});

function Show(buttonID) {
    var buttonText = document.getElementById(buttonID);
    var paragraph = document.getElementById("description");
    if (buttonText.firstChild.data === "Show assignment description")
    {
        buttonText.firstChild.data = "Hide assignment description";
        paragraph.style.display = "block";
        buttonText.title = "Click to hide info!";
    }
    else
    {
        buttonText.firstChild.data = "Show assignment description";
        paragraph.style.display = "none";
        buttonText.title = "Click to show more info!!";
    }
}