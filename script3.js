$(document).ready(function() {
    $("#addBtn").click(function(){
        $("#list").append("<li>Item</li>")
    })
    $("#prependBtn").click(function(){
        $("#list").prepend("<li>Item to start</li>")
    })
    $("#removeBtn").click(function(){
        $("#list li:last").remove()
    })
    $("#imgChBtn").click(function(){
        $("#img1").attr("src","img2.jpg")
        $("#link").attr("href", "https://github.com/yerraxd");
        $("#link").text("Yerassyl's github page");
    })
})
