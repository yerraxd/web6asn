$(document).ready(function() {
    console.log("jQuery is ready!");
    $("#test1").click(function(){
        $("#head1").text("Welcome to my assignment 5 page")
        $("p").html("<i>These texts were writen by dynamicaly jQuery </i>")
        $(".task1").css("background-color","#8e8e8e");
});
    $("#hideBtn").click(function(){
        $("#text2").hide()
    })
    $("#showBtn").click(function(){
        $("#text2").show()
    })
    $("#toggleBtn").click(function(){
        $("#text2").toggle()
    })
});