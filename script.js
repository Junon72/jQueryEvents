$(document).ready(function () {
    
    // Events - Introduction
    $("#stream1_btn").on("click", function () { //could be also written in form .click(function(){});
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });

    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });

    /*******************************
     jQuery Events - Solution code
     *******************************/
    
     //Introductio Challenge

    //1.     on click, change the color of all <p> to red
    $("p").click(function () {
        $("p").addClass("paragraph_color");
    });

    //2.    on hover, over <h2>, change the color of all <h2> to lightblue
    $(".card_head").mouseover(function () {
        $(".card_head").addClass("h2_hoverColor");
    });

    //3.    on hover, over <h2>, increase that <h2> font size to 1.4em
    $("#head_html").mouseover(function () {
        $("#head_html").addClass("h2_hoverFontSize");
        $("#head_mysql").removeClass("h2_hoverFontSize");
        $("#head_python").removeClass("h2_hoverFontSize");
        $("#head_jquery").removeClass("h2_hoverFontSize");
        $("#head_django").removeClass("h2_hoverFontSize");
        $("#head_css").removeClass("h2_hoverFontSize");
    });

    $("#head_mysql").mouseover(function () {
        $("#head_html").removeClass("h2_hoverFontSize");
        $("#head_mysql").addClass("h2_hoverFontSize");
        $("#head_python").removeClass("h2_hoverFontSize");
        $("#head_jquery").removeClass("h2_hoverFontSize");
        $("#head_django").removeClass("h2_hoverFontSize");
        $("#head_css").removeClass("h2_hoverFontSize");
    });

    $("#head_python").mouseover(function () {
        $("#head_html").removeClass("h2_hoverFontSize");
        $("#head_mysql").removeClass("h2_hoverFontSize");
        $("#head_python").addClass("h2_hoverFontSize");
        $("#head_jquery").removeClass("h2_hoverFontSize");
        $("#head_django").removeClass("h2_hoverFontSize");
        $("#head_css").removeClass("h2_hoverFontSize");

    });

    $("#head_jquery").mouseover(function () {
        $("#head_html").removeClass("h2_hoverFontSize");
        $("#head_mysql").removeClass("h2_hoverFontSize");
        $("#head_python").removeClass("h2_hoverFontSize");
        $("#head_jquery").addClass("h2_hoverFontSize");
        $("#head_django").removeClass("h2_hoverFontSize");
        $("#head_css").removeClass("h2_hoverFontSize");

    });

    $("#head_django").mouseover(function () {
        $("#head_html").removeClass("h2_hoverFontSize");
        $("#head_mysql").removeClass("h2_hoverFontSize");
        $("#head_python").removeClass("h2_hoverFontSize");
        $("#head_jquery").removeClass("h2_hoverFontSize");
        $("#head_django").addClass("h2_hoverFontSize");
        $("#head_css").removeClass("h2_hoverFontSize");

    });

    $("#head_css").mouseover(function () {
        $("#head_html").removeClass("h2_hoverFontSize");
        $("#head_mysql").removeClass("h2_hoverFontSize");
        $("#head_python").removeClass("h2_hoverFontSize");
        $("#head_jquery").removeClass("h2_hoverFontSize");
        $("#head_django").removeClass("h2_hoverFontSize");
        $("#head_css").addClass("h2_hoverFontSize");
    });

    //4.    on hover on button, change the <body> background color to black
    $(".bottom_button").mouseenter(function () {
        $("body").addClass("page_toBlack");
    });

    //5.    on hover off button, change the <body> background color to grey
    $(".bottom_button").mouseleave(function () {
        $("body").addClass("page_toGrey");
    });

    //Effects Challenge

    //1.    Make the first button hide on mouse click, using different parameters
    $("#button_one").click(function() {
        //$("#button_one").hide('slow');
        //$("#button_one").hide('medium');
        //$("#button_one").hide('fast');
        //$("#button_one").hide(2000);
        //$("#button_one").fadeOut(700);
        //$("#button_one").slideUp(300);
        $("#button_one").slideToggle('medium');
    });
    //2.    Make the paragraph in a card hide and reappear by click a button
    //3.    Change the .toggle to .toggleSlide
    $("#button_one").click(function() {
        $("#para_one").slideToggle('medium');
    });
    
    $("#button_two").click(function() {
        $("#para_two").slideToggle('medium');
        $("#button_one").slideToggle('medium'); // wanted to get the Button 1 back 
    });

    $("#button_three").click(function() {
        $("#para_three").slideToggle('medium');
    });

    $("#button_four").click(function() {
        $("#para_four").slideToggle('medium');
    });

    $("#button_five").click(function() {
        $("#para_five").slideToggle('medium');
    });

    $("#button_six").click(function() {
        $("#para_six").slideToggle('medium');
    });

    //4.    Use fadeTo in conjunction with mouseenter  and  mouseleave  to modify the button. 
    //      Fade to 50% opacity on mouseenter and fade back to 100% on mouseleave

    //1
    $("#button_one").mouseenter(function() {
        $("#button_one").fadeTo("medium", 0.5);
    });

    $("#button_one").mouseleave(function() {
        $("#button_one").fadeTo("medium", 1);
    });

    //2
    $("#button_two").mouseenter(function() {
        $("#button_two").fadeTo('medium', 0.5);
    });

    $("#button_two").mouseleave(function() {
        $("#button_two").fadeTo('medium', 1);
    });


    //3
    $("#button_three").mouseenter(function() {
        $("#button_three").fadeTo('medium', 0.5);
    });

    $("#button_three").mouseleave(function() {
        $("#button_three").fadeTo(')medium', 1);
    });


    //4
    $("#button_four").mouseenter(function() {
        $("#button_four").fadeTo('medium', 0.5);
    });

    $("#button_four").mouseleave(function() {
        $("#button_four").fadeTo('medium', 1);
    });

    //5
    $("#button_five").mouseenter(function() {
        $("#button_five").fadeTo('medium', 0.5);
    });

    $("#button_five").mouseleave(function() {
        $("#button_five").fadeTo('medium', 1);
    });

    //6
    $("#button_six").mouseenter(function() {
        $("#button_six").fadeTo('medium', 0.5);
    });

    $("#button_six").mouseleave(function() {
        $("#button_six").fadeTo('medium', 1);
    });

   $('#myButton').removeClass('blueBox').addClass('border');
});

