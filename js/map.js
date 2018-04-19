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
}