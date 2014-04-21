$(document).ready(function(){
var navbutton=$(".navigation-button");
var navbutton2=$(".navigation-button2");
navbutton.on("click", function(){$(".nav-container").toggle( "slow" );})
navbutton.on("hover",function(){$(".nav-container").toggle( "slow" );})
navbutton2.on("click", function(){$(".nav-container").toggle( "slow" );})
});