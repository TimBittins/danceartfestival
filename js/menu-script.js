"use-strict";

console.log("jquery Menu test1");



$(document).ready(function() {

    // $('.menu__bar--languages input[value="german"]').prop("checked", true);
    // $('.menu__bar--languages input[value="english"]').prop("checked", false);
    // $('.menu__bar--languages input[value="german"]').trigger("click");
    $(".daf-logo").css("box-shadow", "0 0 0 0.4rem white"); 
    $('[lang="en"]').hide();
    $('[lang="de"]').show();


    $("li a").click(function() {
        $("li a p").css("color", "#feea01");

    });


    // MENU select page
    $("#home").click(function() {                    
        $("#website").load( "index.html #website",
         function() {
            $('[lang="en"]').hide();
            $("li a p").css("color", "#feea01");
            $(".daf-logo").css("box-shadow", "0 0 0 0.4rem white"); 
        });
    });




    $("#dad").click(function() {                    
        $("#website").load( "pages/danceartdigital.html #website",
         function() {
            $('[lang="en"]').hide();
            $(".daf-logo").css("box-shadow", "none");
            $("#dad p").css("color", "white");
         });
    });

    $("#guests").click(function() {                    
        $("#website").load( "pages/guests.html #website",
         function() {
            $('[lang="en"]').hide();
            $(".daf-logo").css("box-shadow", "none");
            $("#guests p").css("color", "white");
        });
    });

    $("#fotos").click(function() {                    
        $("#website").load( "pages/fotos.html #website",
         function() {
            $('[lang="en"]').hide();
            $("#fotos p").css("color", "white");
        });
    });

    $("#videos").click(function() {                    
        $("#website").load( "pages/videos.html #website",
         function() {
            $('[lang="en"]').hide();
            $("#videos p").css("color", "white");
        });
    });

    $("#partner").click(function() {                    
        $("#website").load( "pages/partner.html #website",
         function() {
            $('[lang="en"]').hide();
            $("#partner p").css("color", "white");
        });
    });

    
   
    


    $('.menu__bar--languages input[type="radio"]').click(function() {
        var langRadioCheck = $(this).val();
        console.log(langRadioCheck);

            // if(langRadioCheck === "german") {
            //     $('[lang="de"]').show("swing");
            //     $('[lang="en"]').hide("swing");

            //     $("#home").click(function() {                    
            //         $("#website").load( "index.html #website", function() {
            //             $('[lang="de"]').show();
            //             $('[lang="en"]').hide();}
            //         );
            //     });

            //     $("#dad").click(function() {                    
            //         $("#website").load( "pages/danceartdigital.html #website", function() {
            //             $('[lang="de"]').show();
            //             $('[lang="en"]').hide();}
            //         );
            //     });

            //     $("#gaeste").click(function() {                    
            //         $("#website").load( "pages/guests.html #website", function() {
            //             $('[lang="de"]').show();
            //             $('[lang="en"]').hide();}
            //         );
            //     });

            //     $("#fotos").click(function() {                    
            //         $("#website").load( "pages/fotos.html #website", function() {
            //             $('[lang="de"]').show();
            //             $('[lang="en"]').hide();}
            //         );
            //     });

            //     $("#videos").click(function() {                    
            //         $("#website").load( "pages/videos.html #website", function() {
            //             $('[lang="de"]').show();
            //             $('[lang="en"]').hide();}
            //         );
            //     });

            //     $("#partner").click(function() {                    
            //         $("#website").load( "pages/partner.html #website", function() {
            //             $('[lang="de"]').show();
            //             $('[lang="en"]').hide();}
            //         );
            //     });
            // } 

            if(langRadioCheck === "english") {
                $('[lang="en"]').show("swing");
                $('[lang="de"]').hide("swing");

                $("#home").click(function() {                    
                    $("#website").load( "index.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();}
                    );
                });

                $("#dad").click(function() {                    
                    $("#website").load( "pages/danceartdigital.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();}
                    );
                });

                $("#guests").click(function() {                    
                    $("#website").load( "pages/guests.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();}
                    );
                });

                $("#fotos").click(function() {                    
                    $("#website").load( "pages/fotos.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();}
                    );
                });

                $("#videos").click(function() {                    
                    $("#website").load( "pages/videos.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();}
                    );
                });

                $("#partner").click(function() {                    
                    $("#website").load( "pages/partner.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();}
                    );
                });
            } 
            else {
                $('[lang="en"]').hide("swing");
                $('[lang="de"]').show("swing");

                $("#dad").click(function() {                    
                    $("#website").load( "pages/danceartdigital.html #website", function() {
                        $('[lang="de"]').show();
                        $('[lang="en"]').hide();}
                    );
                });

            };
      });

  });