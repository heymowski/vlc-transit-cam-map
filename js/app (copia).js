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
var path = [ 
				[  39.470080846018718,-0.376776564135291 ],
				[  39.469419013533873,-0.376796470142288 ],
				[  39.469329915782239,-0.376772491718694 ],
				[  39.469276858636341,-0.376724807540531 ],
				[  39.469243036697485,-0.376676389006106 ],
				[  39.469214135512729,-0.376590544693033 ],
				[  39.46921245448506 ,-0.376516079544632],
				[ 39.469221099861201 ,-0.37604629130101],
				[  39.469242562573193,-0.375973443633036 ],
				[  39.469270346633827,-0.375925208851772 ],
				[  39.469311829356364,-0.375886385390886 ],
				[  39.469351498055126,-0.375852604833317 ],
				[  39.46940830786955 ,-0.375810729380269],
				[ 39.469463639599944 ,-0.37578877363251],
				[  39.469525198511704,-0.375786459619133 ],
				[  39.469594500531556,-0.375786341922213 ],
				[  39.470149928099858,-0.375998953986932 ],
				[  39.470202761335237,-0.376036708559132 ],
				[  39.470234488953473,-0.376077743898879 ],
				[  39.470267458496664,-0.376173385970367 ],
				[  39.470268691408251,-0.376227993006461 ],
				[  39.47027348749473 ,-0.376270040676464],
				[  39.470232273826518,-0.376661578857279 ],
				[  39.470214326863513,-0.376719382406814 ], 
				[  39.470182457110418,-0.376757844680963 ],
				[  39.470138664413753,-0.376779354696919 ], 
				[  39.47008468951536 ,-0.376776419708873]
			];
map.drawPolyline({
  path: path,
  strokeColor: '#131540',
  strokeOpacity: 0.6,
  strokeWeight: 6
});