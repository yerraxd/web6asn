$(document).ready(function() {
    $("#btn1").click(function(){
        $("#stage").animate({
            width: "+=100px",
            height: "+=100px",
            left: "+=50px"
        }, 800)
    })
    $("#reset1").click(function(){
        $("#stage").animate({
            width: "50px",
            height: "50px",
            left: "0px"
        }, 800);
    });
    $("#btn2").click(function(){
        $("#stage2").animate({left: "+=50px"}, 800)
        $("#stage2").animate({top: "+=50px"}, 800)
        $("#stage2").animate({
            width: "-=50px",
            height: "-=50px",
        }, 800)
         $("#stage2").animate({
        width: "150px",
        height: "150px",
        left: "0px",
        top: "0px"
        }, 800);
    });
    $("#btn3").click(function(){
        $("#stage3").animate({left: "200px",
            marginTop: "100px",
            width: "200px",
            height: "200px",
            opacity: 0.5
        }, 2000);
    });
  $('#reset3').click(function(){ 
        $('#stage3').animate({ width: '50px',  
            height: '50px', 
            left: '0px', 
            marginTop: '0px', 
            opacity: 1 }, 800); 
    }); 
});