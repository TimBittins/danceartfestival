"use-strict";
console.log("JS Start check");
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dadUrl = "pages/danceartdigital.html";

// M E N U 
function requestHome() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/home.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestDad() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/danceartdigital.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestGuests() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/guests.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestFotos() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/fotos.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestVideos() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/videos.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestPartners() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/partners.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestImpressum() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/impressum.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestPrivacy() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/privacy.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

















  // TO TOP BUTTON
  const toTopButton = document.getElementById("toTopButton");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      toTopButton.style.display = "flex";
    } else {
      toTopButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }