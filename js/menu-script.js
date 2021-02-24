"use-strict";

console.log("jquery Menu test1");



$(document).ready(function() {

    $('.menu__bar--languages input[value="english"]').prop("checked", true);
    $('.menu__bar--languages input[value="english"]').prop("checked", false);
    // $('.menu__bar--languages input[value="german"]').trigger("click");

    // $(".daf-logo").css("box-shadow", "0 0 0 0.4rem white"); 
    $('[lang="en"]').hide();
    $('[lang="de"]').show();
    

    $(".daf-logo").css("border", "0.4rem solid white");

    $("li a p").click(function() {
        $(".daf-logo").css("border", "0 solid white");
        $("li a").removeClass("current");
        

    });


    // MENU select page
    $("#home").click(function() {                    
        $("#main__website").load( "index.html #main__website",
         function() {
            $('[lang="en"]').hide();
            $('[lang="de"]').show();
            $(".daf-logo").css("border", "0.4rem solid white"); 
            $("li a").removeClass("current");
        });
    });

    $("#dad").click(function() {                    
        $("#main__website").load( "pages/danceartdigital.html #website",
         function() {
            $('[lang="en"]').hide();
            $('[lang="de"]').show();
            $("#dad").addClass("current");
         });
    });

    $("#guests").click(function() {                    
        $("#main__website").load( "pages/guests.html #website",
         function() {
            $('[lang="en"]').hide();
            $('[lang="de"]').show();
            $("#guests").addClass("current");
        });
    });

    $("#fotos").click(function() {                    
        $("#main__website").load( "pages/fotos.html #website",
         function() {
            $('[lang="en"]').hide();
            $('[lang="de"]').show();
            $("#fotos").addClass("current");
        });
    });

    $("#videos").click(function() {                    
        $("#main__website").load( "pages/videos.html #website",
         function() {
            $('[lang="en"]').hide();
            $('[lang="de"]').show();
            $("#videos").addClass("current");
        });
    });

    $("#partners").click(function() {                    
        $("#main__website").load( "pages/partners.html #website",
         function() {
            $('[lang="en"]').hide();
            $('[lang="de"]').show();
            $("#partners").addClass("current");
        });
    });

    
   
    $('.menu__bar--languages input[type="radio"]').click(function() {
        let langRadioCheck = $(this).val();
        console.log(langRadioCheck);

            if(langRadioCheck === "english") {

                $('[lang="en"]').show();
                $('[lang="de"]').hide();

                $("#home").click(function() {                    
                    $("#main__website").load( "index.html #main__website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();
                        $('.menu__bar--languages input[value="english"]').trigger("click");
                    });
                });

                $("#dad").click(function() {                    
                    $("#main__website").load( "pages/danceartdigital.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();
                        $('.menu__bar--languages input[value="english"]').trigger("click");
                    });
                });

                $("#guests").click(function() {                    
                    $("#main__website").load( "pages/guests.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();
                        $('.menu__bar--languages input[value="english"]').trigger("click");
                    });
                });

                $("#fotos").click(function() {                    
                    $("#main__website").load( "pages/fotos.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();
                        $('.menu__bar--languages input[value="english"]').trigger("click");
                    });
                });

                $("#videos").click(function() {                    
                    $("#main__website").load( "pages/videos.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();
                        $('.menu__bar--languages input[value="english"]').trigger("click");
                    });
                });

                $("#partners").click(function() {                    
                    $("#main__website").load( "pages/partners.html #website", function() {
                        $('[lang="en"]').show();
                        $('[lang="de"]').hide();
                        $('.menu__bar--languages input[value="english"]').trigger("click");
                    });
                });
            } 
            if(langRadioCheck === "german") {
                $('[lang="en"]').hide();
                $('[lang="de"]').show();

                $("#home").click(function() {                    
                    $("#main__website").load( "index.html #website", function() {
                        $('[lang="de"]').show();
                        $('[lang="en"]').hide();
                    });
                });

                $("#dad").click(function() {                    
                    $("#main__website").load( "pages/danceartdigital.html #website", function() {
                        $('[lang="de"]').show();
                        $('[lang="en"]').hide();
                    });
                });

                $("#guests").click(function() {                    
                    $("#main__website").load( "pages/guests.html #website", function() {
                        $('[lang="de"]').show();
                        $('[lang="en"]').hide();
                    });
                });

                $("#fotos").click(function() {                    
                    $("#main__website").load( "pages/fotos.html #website", function() {
                        $('[lang="de"]').show();
                        $('[lang="en"]').hide();
                    });
                });

                $("#videos").click(function() {                    
                    $("#main__website").load( "pages/videos.html #website", function() {
                        $('[lang="de"]').show();
                        $('[lang="en"]').hide();
                    });
                });

                $("#partners").click(function() {                    
                    $("#main__website").load( "pages/partners.html #website", function() {
                        $('[lang="de"]').show();
                        $('[lang="en"]').hide();
                    });
                });
            };
      });
  });