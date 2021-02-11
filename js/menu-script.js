"use-strict";
console.log("jquery Menu test1");

$(document).ready(function() {
    $("#guests").click(function() {
        $("#website-content").load( "guests.html #guest-box" );
    });
    $("#gaeste").click(function() {
        $("#website-content").load( "guests.html #guest-test" );
    });-
    $("#home").click(function() {
        $("#website").load( "index.html #website" );
    });
    
});

$(document).ready(function() {
    // $('[lang="en"]').hide();
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