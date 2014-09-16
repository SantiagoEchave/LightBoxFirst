$(document).ready(function(){
    //Ocultar el Ul
    $("ul").hide();
    //Apuntar en el DOM click img
    $(".pete").click(function(e){
        e.preventDefault();
        $("ul").slideToggle();
    });


//    $(".FirstCont").prepend("<p>Ahhh sos normal?</p>");
    $(".FirstCont").append("<p>Ahhh sos normal?</p>");




























});