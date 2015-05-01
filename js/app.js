/*
 *
 * Google MAPS API Direct Mode:
 *

	var mapOptions = {
          center: new google.maps.LatLng(39.46991, -0.37629),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
    var map = new google.maps.Map(document.getElementById("map"),mapOptions);

	google.maps.event.addListener(map, 'zoom_changed', removeCams);
 
 *
 */
 

var map = new GMaps({
	  div: '#map',
	  zoom: 15,
	  lat: 39.46991,
	  lng: -0.37629,
	});

var camsOn = false;

function checkZoom(){
	//console.log(map.getZoom());
	if(map.getZoom()<16){
		if (camsOn) {
			removeCams();
		}		
	}else{
		showCams();
	}
}

function removeCams(){
	map.removeMarkers();		
};

function showCams(){


	var cameres = cameres_transit;
	camsOn = true;
		
	cameres.forEach(function(element, index){
		
		map.addMarker({
		  lat: element.geometry.coordinates[1],
		  lng: element.geometry.coordinates[0],
		  title: element.properties.idcamara,
		  click: function(e) {
		    //alert('You clicked in this marker');
		    //window.location = element.properties.url_trafico;
		    window.open (element.properties.url_trafico,"cam_window","menubar=0,resizable=0,width=350,height=500,top=100,left=100");
		  }
		});
	});
}

// Routes

//var coor = estat_trafic[0].geometry.coordinates;

/*var coor = estat_trafic;

coor.forEach(function(element, index){
	
	var coordinates = element.geometry.coordinates;
	//console.log(index+' - Es el indice');
	//console.log(coordinates[0][0]);
	console.log(coordinates.length);

		if(coordinates.length == 4){
		for (i = 0; i < coordinates.length-1; i++) {
	   		
	   		x=i+1;
	 
	   		//console.log(i + ' - ' + x);
	   		/*
	   		console.log(element.geometry.coordinates[i][1]);
	   		console.log(index);
	   		console.log(element.geometry.coordinates[i][0]);
	   		console.log(element.geometry.coordinates[i+1][1]);
	   		console.log(element.geometry.coordinates[i+1][0]);
			*/
		   	/*console.log(coor[i][1]+coor[i][0]);
			console.log(coor[i+1][1]+coor[i+1][0]);*/
			/*console.log('I es = '+i);
			console.log('X es = '+x);	
			map.drawRoute({
			  origin: [coordinates[i][1], coordinates[i][0]],
			  destination: [coordinates[x][1], coordinates[x][0]],
			  travelMode: 'driving',
			  strokeColor: 'green',
			  strokeOpacity: 0.6,
			  strokeWeight: 6
			});
		}
	}
});

/*
map.drawRoute({
  origin: [estat_trafic.geometry.coordinates[0][1], estat_trafic.geometry.coordinates[0][0]],
  destination: [estat_trafic.geometry.coordinates[1][1], estat_trafic.geometry.coordinates[1][0]],
  travelMode: 'driving',
  strokeColor: 'green',
  strokeOpacity: 0.6,
  strokeWeight: 6
});
*/

