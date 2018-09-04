
var map;

function initMap() {
  var uluru = {lat: 49.89, lng: -97.135};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3.5,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
