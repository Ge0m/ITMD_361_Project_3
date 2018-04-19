var map;
function initMap()
{
  map = new google.maps.Map(document.getElementById('map'), 
    {
      center: {lat: 39.859212, lng: 20.0271},
      zoom: 15,
      mapTypeId: 'roadmap',
      mapTypeControl: true,
      mapTypeControlOptions: 
      {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        mapTypeIds: ['roadmap', 'satellite'],
        position: google.maps.ControlPosition.TOP_CENTER
      },
      zoomControl: true,
      zoomControlOptions: 
      {
        position: google.maps.ControlPosition.RIGHT_CENTER
      }
    });

    var contentString = 
      '<h1>Saranda, Albania</h1>';

    var infowindow = new google.maps.InfoWindow(
    {
      content: contentString
    });

    var marker = new google.maps.Marker(
    {
      position: {lat: 39.859212, lng: 20.0271},
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Saranda, Albania'
    });

    marker.addListener('click', function() 
    {
      infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initMap);