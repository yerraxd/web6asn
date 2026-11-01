$(document).ready(function() {

    $(".thumb").fadeIn(800);

    $(".thumb").click(function() {
        $("#bigImg").attr("src", $(this).attr("src"));
        $("#bigImg").css("width", "20%");
        $("#viewer").fadeIn(300);
        $("#bigImg").animate({ width: "100%" }, 500);
    });

    $("#viewer").click(function() {
        $("#viewer").fadeOut(300);
    });
});