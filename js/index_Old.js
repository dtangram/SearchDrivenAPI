/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

var request = new XMLHttpRequest();

var searchField = document.querySelector("header > div:nth-child(3) > div input");
// var magnifyGlass = document.querySelector("header > div:nth-child(3) > div img");

request.onload = function(){
  if(request.status >= 200 && request.status < 400){
      var jsonObj = JSON.parse(request.responseText);

      var locationInfoString = "";

      locationInfoString += "<h3> Results for " + searchField.value + "</h3>";

      for(var i = 0; i < jsonObj.results.albummatches.album.length; i++){
        locationInfoString += "<article>";
        locationInfoString += "<img src='" + jsonObj.results.albummatches.album[i].image[3]['#text'] + "' title='" + jsonObj.results.albummatches.album[i].name + " " + "' alt='" + jsonObj.results.albummatches.album[i].name + "'>";
        locationInfoString += "<p><span>" + jsonObj.results.albummatches.album[i].name + "</span><br /><br />" + jsonObj.results.albummatches.album[i].artist + "</p>";
        locationInfoString += "</article>";
      }

      var contentLocationInfo = document.querySelector("section article");
      contentLocationInfo.innerHTML = locationInfoString;

      console.log(jsonObj);
    }
};

request.onerror = function(){
  console.log("connection error");
};

var url = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=eed52d1ba57c50e9025f090b596fd40f&format=json";

request.open("GET", url, true);
request.send(null);



// magnifyGlass.addEventListener("submit", function(e){
//   event.preventDefault();
//     var searchInput = searchField.value;
// // request.onload(searchInput);
// });


// var submit = document.querySelector("header > div:nth-child(3) > div input");
//
// submit.addEventListener("submit", function(e){
//   e.preventDefault();
//
//   var query = searchField.value;
//
//   var limit = "10";
//   var type = "album";
//
//   var api = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=eed52d1ba57c50e9025f090b596fd40f&format=json";
// });
