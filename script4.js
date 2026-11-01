$(document).ready(function() {
    $("#name").on("input", function() {
        $("#nameSpan").text($(this).val());
    });
    $("#email").on("input", function() {
        $("#emailSpan").text($(this).val());
    });
});