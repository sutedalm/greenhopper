// Makes api call to get recipe and shop list
export async function api_call(from, to) {

    // Car
    let car_card = await get_car_route(from, to);
    // Bus
    let bus_card = await get_bus_route(from, to);
    // Train
    let train_card = await get_train_route(from, to);
    // Flight
    let flight_card = await get_flight_route(from, to);
    
    // We use string input in from and to
    let cards = [
        car_card,
        bus_card,
        train_card,
        flight_card
    ]
    
    cards.sort(function (a, b) {
        return a["carbon_emission"] - b["carbon_emission"];
    });

    return cards;
}

async function get_car_route( from, to ) {
    return {
            "type": "flight",
            "carbon_emission": 5,
            "link": "https://www.google.com/",
        };
}

async function get_bus_route( from, to ) {
    return {
            "type": "flight",
            "carbon_emission": 3,
            "link": "https://www.google.com/",
        };
}

async function get_train_route( from, to ) {
    return {
            "type": "flight",
            "carbon_emission": 9,
            "link": "https://www.google.com/",
        };
}

async function get_flight_route( from, to ) {
    return {
            "type": "flight",
            "carbon_emission": 8,
            "link": "https://www.google.com/",
        };
}
