// TODO: Put your JS code in here

$(document).ready(function(){
  $("#geocode").on('click', function(){
    $.ajax({
      type: "GET",
      url: "https://maps.googleapis.com/maps/api/geocode/json?address="+ $('#address').val() + "&key=AIzaSyBQ_pNoPCq2BPMUzYTJOGYtoIC18YvJn7Y",
      success: function(data) {
        $('#map_coordinates').empty();
        $('#map_coordinates').append("<div> Lat : " + data.results[0].geometry.location.lat + "</div>");
        $('#map_coordinates').append("<div> Long : " + data.results[0].geometry.location.lng + "</div>");
        // console.log(data.results[0].geometry.location.lat);
        // console.log(data.results[0].geometry.location.lng);
      var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng },
      zoom: 14  // Change this value from 0 to 18
      });
      var marker = new google.maps.Marker({
      map: map,
      position: { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng }
      });
      },
      error: function(jqXHR) {
        console.error(jqXHR.responseText);
      }
    });
  });
});

