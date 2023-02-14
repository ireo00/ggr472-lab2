// Define mapbox access token
//Add default public map token from my Mapbox account 
mapboxgl.accessToken = 'pk.eyJ1IjoiaXJlbyIsImEiOiJjbGRtMTVrbGkwNHh5M3B0Yjd5YnF3cHNvIn0.KNtbmsY84dCZpXiXy91keg'; 

// Create basemap, set the starting zoom level and position
const map = new mapboxgl.Map({
    container: 'ttcmap', // container ID in html
    style: 'mapbox://styles/ireo/cle1oxmx8005c01pflmohg567', // Add link to my stylesheet
    center: [-79.389, 43.704], // starting position [longitude, latitude]
    zoom: 11.3, // starting zoom level
});

// Add data sources and draw layers
map.on('load', () => {
    //Add a new source from our GeoJSON data for TTC subway stations
    //ADDING TTC subway stations from a GeoJSON file, GeoJSON must direct to URL 
    /*map.addSource('ttc-subwayStns', {
        type: 'geojson',
        data: 'https://ireo00.github.io/ggr472-lab2/Data/subwayStations.geojson'
    });

    //Draw GeoJSON as circles
    map.addLayer({
        'id': 'subwayStns',
        'type': 'circle',
        'source': 'ttc-subwayStns',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#a04646'
        }

    });*/

    //Add a new source from our vector data for Toronto neighbourhood boundaries via mapbox
    /*map.addSource('toronto-nrbd', {
        'type': 'vector',
        'url': 'mapbox://ireo.3lw8ikgt'
    });

    //Draw vector as filled polygons
    map.addLayer({
        'id': 'toronto-nrbd-fill',
        'type': 'fill',
        'source': 'toronto-nrbd',
        'paint': {
            'fill-color': '#777777',
            'fill-opacity': 0.5,
            'fill-outline-color': '#E3B5B5',
        },
        'source-layer': 'Neighbourhoods-0an01l' //name of layer in mapbox tileset page
    });*/

    //Add a new source from our vector data for TTC subway lines via mapbox
    map.addSource('ttc-subwaylines', { //Your source ID
        'type': 'vector',
        'url': 'mapbox://ireo.9k0gkaon' //Your tileset link from mapbox
    });

    //Draw vector as lines
    map.addLayer({
        'id': 'subwaylines',
        'type': 'line',
        'source': 'ttc-subwaylines', //must match source ID from addSource method
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            //Colour coding TTC subway lines
            'line-color': [
                'step',
                ['get', 'RID'],
                'black',
                1,
                '#eec62b',
                2,
                '#21a560',
                3,
                '#1595ce',
                4,
                '#ae0671'
            ],
            'line-width': 5
        },
        'source-layer': 'subwayLines-v2-9y4xbd' //name of layer in mapbox tileset page
    });

    //Add a new source from our vector data for TTC subway stations via mapbox
    map.addSource('ttc-subwayStns', { //Your source ID
        'type': 'vector',
        'url': 'mapbox://ireo.32z0s441' //Your tileset link from mapbox
    });

    //Draw vector as circles
    map.addLayer({
        'id': 'subwayStns',
        'type': 'circle',
        'source': 'ttc-subwayStns', //must match source ID from addSource method
        'paint': {
            'circle-color': '#a04646',
            'circle-radius': 5
        },
        'source-layer': 'subwayStations-9ooxz1' //name of layer in mapbox tileset page
    });

    //Draw TTC subway station labels using 'STATION' property
    map.addLayer({
        'id': 'subwayStns-labels',
        'type': 'symbol',
        'source': 'ttc-subwayStns',
        'layout': {
            'text-field': ['get', 'Name'],
            'text-variable-anchor': ['bottom'],
            'text-radial-offset': 0.6,
            'text-justify': 'auto',
            'text-font': ['DIN Offc Pro Medium'],
            'text-size': 15
        }
    });


    //Add a new source from our GeoJSON data for TTC subway stations
    //ADDING TTC subway stations from a GeoJSON file, GeoJSON must direct to URL 
    map.addSource('to-bakeries', {
        type: 'geojson',
        data: 'https://ireo00.github.io/ggr472-lab2/Data/TObakeries.geojson'
        //'https://github.com/ireo00/ggr472-lab2/blob/17826471d174efba232ad1cf10bac9cc7653c897/Data/TObakeries.geojson'
    });

    //Draw GeoJSON as circles
    map.addLayer({
        'id': 'bakeries',
        'type': 'circle',
        'source': 'to-bakeries',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#1827AC'
        }});
    
    //Draw GeoJSON labels using 'Name' property
    map.addLayer({
        'id': 'toronto-bakeries-labels',
        'type': 'symbol',
        'source': 'to-bakeries',
        'layout': {
            'text-field': ['get', 'Name'],
            'text-variable-anchor': ['bottom'],
            'text-radial-offset': 0.6,
            'text-justify': 'auto',
            'text-font': ['DIN Offc Pro Medium'],
            'text-size': 13
        }});

    });