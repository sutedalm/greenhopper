// Makes api call to get recipe and shop list
export async function api_call(from, to) {
    console.log(from + " to " + to);
    //First get distance
    let from_dist_url = "https://nominatim.openstreetmap.org/search.php?q=" + from + "&format=jsonv2";
    let to_dist_url = "https://nominatim.openstreetmap.org/search.php?q=" + to + "&format=jsonv2";

    let from_dist = await get_dist(from_dist_url);
    let to_dist = await get_dist(to_dist_url);
    let dist = distance(from_dist[0], from_dist[1], to_dist[0], to_dist[1]); // To simplify matters, we utilize air distance

    console.log("Distance: ")
    console.log(dist)
    // Car
    let car_card = await get_car_card(from, to, dist);
    // Train
    let train_card = await get_train_card(from, to, dist);
    // Flight
    let flight_card = await get_flight_card(from, to, dist);
    
    // We use string input in from and to
    let cards = [
        car_card,
        train_card,
        flight_card
    ]
    
    cards.sort(function (a, b) {
        return a["carbon_emission"] - b["carbon_emission"];
    });

    return cards;
}

function distance(lat1, lon1, lat2, lon2) {
    var unit = "K";
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

async function get_dist(url) {
     var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    let response = await fetch(url, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
    console.log(response)
    let ret_lat = response[0]["lat"]
    let ret_long = response[0]["lon"]
    return [ret_lat, ret_long];
}

async function get_car_card( from, to, dist) {
    let carbon_footprint = (dist/100) * 8.42 * 0.4; // Referenced from https://co2.myclimate.org/en/car_calculators/new
    // Assumption is that the car is mid-range and we use Ethanol (E10)
    return {
            "type": "car",
            "carbon_emission": carbon_footprint,
            "link": "https://www.blablacar.de/",
        };
}

async function get_train_card( from, to, dist) {
    let carbon_footprint = dist * 0.000006; // Referenced from https://www.worldlandtrust.org/carbon-calculator/individual/transport/transport-calculator/
    // Assumption is that it is an international travel and one passenger

    return {
            "type": "train",
            "carbon_emission": carbon_footprint,
            "link": "https://www.bahn.com/",
        };
}

async function get_flight_card( from, to, dist) {
    let cb_url = "https://co2.myclimate.org/en/flight_calculators";

    return {
            "type": "flight",
            "carbon_emission": 8,
            "link": "https://www.google.com/",
        };
}
