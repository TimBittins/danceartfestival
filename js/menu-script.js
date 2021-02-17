"use-strict";
console.log("jquery Menu test1");

$(document).ready(function() {
    $("#home").click(function() {
        $("#header__content").load( "../index.html #header__content" );
        $("#website__content").load( "../index.html #website__content" );
    });
    $("#guests").click(function() {
        $("#head").load( "pages/guests.html #head" );
        $("#header__content").load( "pages/guests.html #header__content" );
        $("#website__content").load( "pages/guests.html #website__content" );
    });
    $("#gaeste").click(function() {
        $("#header__content").load( "pages/guests.html #header__content" );
        $("#website__content").load( "pages/guests.html #website__content" );
    });
    $("#dance-art-digital").click(function() {
        $("#header__content").load( "pages/dance-art-digital.html #header__content" );
        $("#website__content").load( "pages/dance-art-digital.html #website__content" );
    });    
});





$(document).ready(function() {
    $('[lang="en"]').hide();
    $('.menu__bar--languages input[type="radio"]').click(function() {
        var langRadioCheck = $(this).val();
        console.log(langRadioCheck);
            if(langRadioCheck === "english") {
                $('[lang="en"]').show("swing");
                $('[lang="de"]').hide("swing");
            } else {
                $('[lang="en"]').hide("swing");
                $('[lang="de"]').show("swing");
            };
      });

  });