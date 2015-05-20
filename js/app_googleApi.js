/*
 *
 * Google MAPS API Direct Mode:
 */

  var myLatLng = new google.maps.LatLng(39.46991, -0.37629);
  var mapOptions = {
    zoom: 14,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };


  var map = new google.maps.Map(document.getElementById("map"),mapOptions);
  
  google.maps.event.addListener(map, 'zoom_changed', checkZoom);

  var flightPlanCoordinates = [
        new google.maps.LatLng(39.470080846018718,-0.376776564135291 ),
        new google.maps.LatLng(39.469419013533873,-0.376796470142288 ),
        new google.maps.LatLng(39.469329915782239,-0.376772491718694 ),
        new google.maps.LatLng(39.469276858636341,-0.376724807540531 ),
        new google.maps.LatLng(39.469243036697485,-0.376676389006106 ),
        new google.maps.LatLng(39.469214135512729,-0.376590544693033 ),
        new google.maps.LatLng(39.46921245448506 ,-0.376516079544632 ),
        new google.maps.LatLng(39.469221099861201 ,-0.37604629130101 ),
        new google.maps.LatLng(39.469242562573193,-0.375973443633036 ),
        new google.maps.LatLng(39.469270346633827,-0.375925208851772 ),
        new google.maps.LatLng(39.469311829356364,-0.375886385390886 ),
        new google.maps.LatLng(39.469351498055126,-0.375852604833317 ),
        new google.maps.LatLng(39.46940830786955 ,-0.375810729380269 ),
        new google.maps.LatLng(39.469463639599944 ,-0.37578877363251 ),
        new google.maps.LatLng(39.469525198511704,-0.375786459619133 ),
        new google.maps.LatLng(39.469594500531556,-0.375786341922213 ),
        new google.maps.LatLng(39.470149928099858,-0.375998953986932 ),
        new google.maps.LatLng(39.470202761335237,-0.376036708559132 ),
        new google.maps.LatLng(39.470234488953473,-0.376077743898879 ),
        new google.maps.LatLng(39.470267458496664,-0.376173385970367 ),
        new google.maps.LatLng(39.470268691408251,-0.376227993006461 ),
        new google.maps.LatLng(39.47027348749473 ,-0.376270040676464 ),
        new google.maps.LatLng(39.470232273826518,-0.376661578857279 ),
        new google.maps.LatLng(39.470214326863513,-0.376719382406814 ), 
        new google.maps.LatLng(39.470182457110418,-0.376757844680963 ),
        new google.maps.LatLng(39.470138664413753,-0.376779354696919 ), 
        new google.maps.LatLng(39.47008468951536 ,-0.376776419708873 ),
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  //flightPath.setMap(map);

var coor = estat_trafic;

var colores = [];
colores[0] = '#9cc650';
colores[1] = '#cf5300';
colores[2] = '#5d0000';
colores[3] = '#262d37';
colores[5] = '#37aeca';

/*
0 Fluido
1 Denso
2 Congestionado
3 Cortado
*/

coor.forEach(function(element, index){
  
  var coordinates = element.geometry.coordinates;
  var idtramo = element.properties.idtramo;
  var estado = element.properties.estado;
  var tramo = [];
  
    for (i = 0; i < coordinates.length; i++) {
        
        x=i+1;
        var coordenada = new google.maps.LatLng(coordinates[i][1],coordinates[i][0]);
        tramo.push(coordenada);
    }

  var calles = new google.maps.Polyline({
    path: tramo,
    strokeColor: colores[estado],
    strokeOpacity: 1.0,
    strokeWeight: 3
  });

  calles.setMap(map);

  });

  function checkZoom(){
    console.log('Zooommmm');
  }