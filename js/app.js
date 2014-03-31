$(document).foundation();
$(document).ready(function() {
 $(".nav-expansion-title").click(function(){
    $(".nav-expansion-content").slideToggle();
    if($( this ).hasClass( "pre-expansion" )){
        $(this).removeClass("pre-expansion").addClass("post-expansion");
    }
    else{
        $(this).removeClass("post-expansion").addClass("pre-expansion");
    }
    }
 );
});