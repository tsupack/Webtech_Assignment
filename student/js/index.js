$(document).ready(function () {
    $("#content").load("content.html");
});
$(document).ready(function () {
    $.each($(".menuButton"), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();
            if (!($(this).find('a').attr("href") == "index.html")) {
                $("#content").load($(this).find('a').attr("href"));
            }
            else {
                open("index.html", "_self");
            }
        });
    })
});
function Show() {
    var x = document.getElementById("Description");
    var show = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
        show.value = "Show assignment description";
    }
    else {
        x.style.display = "none";
        show.value = "Hide assignment description";
    }
}