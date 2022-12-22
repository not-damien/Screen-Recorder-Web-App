let screenStr = "Images/ScreenOr.svg"
$("#screen").click(function(){
    console.log('hi');
    temp = $("#screen").attr("src");
    $("#screen").attr("src",screenStr)
    screenStr = temp;
})

$("#start").mouseenter(function(){
    console.log('hi');
    $(this).attr("src","Images/Start Recording_or.svg")
})
$("#start").mouseleave(function(){
    console.log('bye');
    $(this).attr("src","Images/Start Recording_.svg")
})
