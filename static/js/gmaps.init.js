/* global GMaps: true */

$(document).ready(function () {
  //map()
})

function map () {
  if ($('#map').length) {
    var lat = $('#gmap-lat').val()
    var lng = $('#gmap-lng').val()
    var image = '/img/marker.png'

    var lat2 = $('#gmap-lat2').val()
    var lng2 = $('#gmap-lng2').val()

    var styles =
      [
        {
          'featureType': 'landscape', 'stylers': [{'saturation': -100}, {'lightness': 65}, {'visibility': 'on'}]
        }, {
          'featureType': 'poi', 'stylers': [{'saturation': -100}, {'lightness': 51}, {'visibility': 'simplified'}]
        }, {
          'featureType': 'road.highway', 'stylers': [{'saturation': -100}, {'visibility': 'simplified'}]
        }, {
          'featureType': 'road.arterial', 'stylers': [{'saturation': -100}, {'lightness': 30}, {'visibility': 'on'}]
        }, {
          'featureType': 'road.local', 'stylers': [{'saturation': -100}, {'lightness': 40}, {'visibility': 'on'}]
        }, {
          'featureType': 'transit', 'stylers': [{'saturation': -100}, {'visibility': 'simplified'}]
        }, {
          'featureType': 'administrative.province', 'stylers': [{'visibility': 'off'}]
        }, {
          'featureType': 'water', 'elementType': 'labels', 'stylers': [{'visibility': 'on'}, {'lightness': -25}, {'saturation': -100}]
        }, {
          'featureType': 'water', 'elementType': 'geometry', 'stylers': [{'hue': '#ffff00'}, {'lightness': -25}, {'saturation': -97}]
        }
      ]

    var map = new GMaps({
      el: '#map',
      lat: lat,
      lng: lng,
      zoomControl: true,
      zoomControlOpt: {
        style: 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl: true,
      streetViewControl: true,
      mapTypeControl: true,
      overviewMapControl: true,
      scrollwheel: false,
      draggable: true,
      fitZoom: true,
      zoom: 12,
      styles: styles,
      click: function(e) {
        var url = 'https://www.google.com/maps?z=16&q='+lat+','+lng+'&ll='+lat+','+lng+'';
        window.open(url,'_blank');
      },
    })

    map.addMarker({
      lat: lat,
      lng: lng,
      icon: image /* ,
      title: '',
      infoWindow: {
      content: '<p>HTML Content</p>'
      } */
    })

    map.drawOverlay({
      lat: lat,
      lng: lng,
      content: '<div class="overlay">Niederwald</div>'
    });

    map.addMarker({
      lat: lat2,
      lng: lng2,
      icon: image /* ,
      title: '',
      infoWindow: {
      content: '<p>HTML Content</p>'
      } */
    })

    map.drawOverlay({
      lat: lat2,
      lng: lng2,
      content: '<div class="overlay">Anzefahr</div>'
    });
  }
}
