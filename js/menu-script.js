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
    $('.menu__bar--languages input[type="radio"]').click(function() {
        var langRadioCheck = $(this).val();
        console.log(langRadioCheck);
            if(langRadioCheck === "english") {
                $('[lang="de"]').hide();
                $('[lang="en"]').show();
            } else {
                $('[lang="en"]').hide();
                $('[lang="de"]').show();
            };
      });

  });