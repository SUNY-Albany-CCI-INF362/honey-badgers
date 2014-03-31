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
$(document).foundation('joyride','start');
    $( "#right" ).click(function() {
    $(document).foundation('joyride', 'start');
      });
    $(document).foundation({
      // specify the class used for active dropdowns
      active_class: 'open'
    });
    $(window).bind("load", function () {
        var footer = $("#footer");
        var pos = footer.position();
        var height = $(window).height();
        height = height - pos.top;
        height = height - footer.height();
        if (height > 0) {
            footer.css({
               'margin-top': height + 'px'
            });
        }
    });