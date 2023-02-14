// Define mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiaXJlbyIsImEiOiJjbGRtMTVrbGkwNHh5M3B0Yjd5YnF3cHNvIn0.KNtbmsY84dCZpXiXy91keg'; //Add default public map token from your Mapbox account 

// Create basemap
const map = new mapboxgl.Map({
    container: 'tomap', // container ID in html
    style: 'mapbox://styles/ireo/cle1oxmx8005c01pflmohg567', // Add link to my stylesheet
    center: [-79.374, 43.654], // starting position [longitude, latitude]
    zoom: 12, // starting zoom level
});

// Add data sources and draw layers
map.on('load', () => {

    /*ADDING TTC subway stations FROM A GEOJSON FILE*/
    map.addSource('subwayStns', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "id": 0,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.535835959128121,
                            43.637353504490676
                        ]
                    },
                    "properties": {
                        "FID": 0,
                        "STATION": "Kipling",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 53640,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": "5247 Dundas St. West",
                        "Opened": 1980
                    }
                },
                {
                    "type": "Feature",
                    "id": 1,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.524618157973805,
                            43.645383136965656
                        ]
                    },
                    "properties": {
                        "FID": 1,
                        "STATION": "Islington",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 43090,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": "3286 Bloor St. West",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 2,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.511331169946885,
                            43.648260024446522
                        ]
                    },
                    "properties": {
                        "FID": 2,
                        "STATION": "Royal York",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 19440,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": "3012 Bloor St. West",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 3,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.495101185074404,
                            43.650110604922013
                        ]
                    },
                    "properties": {
                        "FID": 3,
                        "STATION": "Old Mill",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 5780,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": "2672 Bloor St. West",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 4,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.484457927809117,
                            43.649785205137093
                        ]
                    },
                    "properties": {
                        "FID": 4,
                        "STATION": "Jane",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 16730,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": "2440 Bloor St. West",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 5,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.476304327084009,
                            43.651603693666246
                        ]
                    },
                    "properties": {
                        "FID": 5,
                        "STATION": "Runnymede",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 15900,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": "2218 Bloor St. West",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 6,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.46619482341093,
                            43.65398525976466
                        ]
                    },
                    "properties": {
                        "FID": 6,
                        "STATION": "High Park",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 10880,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 7,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.459871782453959,
                            43.655515692026647
                        ]
                    },
                    "properties": {
                        "FID": 7,
                        "STATION": "Keele",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 14800,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 8,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.452370825610359,
                            43.657094672841566
                        ]
                    },
                    "properties": {
                        "FID": 8,
                        "STATION": "Dundas West",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 26500,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 9,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.44258328345947,
                            43.659009627382517
                        ]
                    },
                    "properties": {
                        "FID": 9,
                        "STATION": "Lansdowne",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 16490,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 10,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.435471924823375,
                            43.660255222217053
                        ]
                    },
                    "properties": {
                        "FID": 10,
                        "STATION": "Dufferin",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 27600,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 11,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.425938464326961,
                            43.662425188343448
                        ]
                    },
                    "properties": {
                        "FID": 11,
                        "STATION": "Ossington",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 25990,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 12,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.41844057253131,
                            43.664115143363453
                        ]
                    },
                    "properties": {
                        "FID": 12,
                        "STATION": "Christie",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 12060,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 13,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.411305403687251,
                            43.665675885618001
                        ]
                    },
                    "properties": {
                        "FID": 13,
                        "STATION": "Bathurst",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 28310,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 14,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.403978699532715,
                            43.667303455768021
                        ]
                    },
                    "properties": {
                        "FID": 14,
                        "STATION": "Spadina",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 35310,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 15,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.399522429595848,
                            43.668292127381726
                        ]
                    },
                    "properties": {
                        "FID": 15,
                        "STATION": "St. George",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 119840,
                        "LINE2": "Yonge-University-Spadina",
                        "PLATFORM_1": "1",
                        "SUBWAY_TRA": "True",
                        "ADDRESS": " ",
                        "Opened": 1963
                    }
                },
                {
                    "type": "Feature",
                    "id": 16,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.389898691434809,
                            43.670263710323447
                        ]
                    },
                    "properties": {
                        "FID": 16,
                        "STATION": "Bay",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 28730,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 17,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.385733268495869,
                            43.670801666617571
                        ]
                    },
                    "properties": {
                        "FID": 17,
                        "STATION": "Bloor-Yonge",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 403530,
                        "LINE2": "Yonge-University-Spadina",
                        "PLATFORM_1": "1",
                        "SUBWAY_TRA": "True",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 18,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.376551003342541,
                            43.672312295919241
                        ]
                    },
                    "properties": {
                        "FID": 18,
                        "STATION": "Sherbourne",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 25000,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 19,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.368477130153067,
                            43.673930800900344
                        ]
                    },
                    "properties": {
                        "FID": 19,
                        "STATION": "Castle Frank",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 8650,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 20,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.35866210828361,
                            43.676726338124752
                        ]
                    },
                    "properties": {
                        "FID": 20,
                        "STATION": "Broadview",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 30390,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 21,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.352245991713787,
                            43.678318076535824
                        ]
                    },
                    "properties": {
                        "FID": 21,
                        "STATION": "Chester",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 6980,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 22,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.345064140448997,
                            43.679775082056182
                        ]
                    },
                    "properties": {
                        "FID": 22,
                        "STATION": "Pape",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 27080,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 23,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.337799171751811,
                            43.681224200934942
                        ]
                    },
                    "properties": {
                        "FID": 23,
                        "STATION": "Donlands",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 9770,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 24,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.330277861590091,
                            43.682792361533672
                        ]
                    },
                    "properties": {
                        "FID": 24,
                        "STATION": "Greenwood",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 9910,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 25,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.323083798930668,
                            43.684290300106696
                        ]
                    },
                    "properties": {
                        "FID": 25,
                        "STATION": "Coxwell",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 16700,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 26,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.312974503550706,
                            43.686513806156348
                        ]
                    },
                    "properties": {
                        "FID": 26,
                        "STATION": "Woodbine",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 13810,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 27,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.302015934047972,
                            43.68898276726518
                        ]
                    },
                    "properties": {
                        "FID": 27,
                        "STATION": "Main Street",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 22670,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 28,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.289463177434186,
                            43.694640055658596
                        ]
                    },
                    "properties": {
                        "FID": 28,
                        "STATION": "Victoria Park",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 25520,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 29,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.279070486914208,
                            43.711174038547256
                        ]
                    },
                    "properties": {
                        "FID": 29,
                        "STATION": "Warden",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 26830,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1968
                    }
                },
                {
                    "type": "Feature",
                    "id": 30,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.263668403673861,
                            43.732461860026028
                        ]
                    },
                    "properties": {
                        "FID": 30,
                        "STATION": "Kennedy",
                        "LINE": "Bloor-Danforth",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 68160,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1980
                    }
                },
                {
                    "type": "Feature",
                    "id": 31,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.379907747719201,
                            43.645768063522979
                        ]
                    },
                    "properties": {
                        "FID": 31,
                        "STATION": "Union",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 102160,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 32,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.384817393850469,
                            43.647660036396474
                        ]
                    },
                    "properties": {
                        "FID": 32,
                        "STATION": "St. Andrew",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 41020,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1963
                    }
                },
                {
                    "type": "Feature",
                    "id": 33,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.377864208619371,
                            43.649144540477295
                        ]
                    },
                    "properties": {
                        "FID": 33,
                        "STATION": "King",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 60270,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 34,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.386627995161732,
                            43.650848429762981
                        ]
                    },
                    "properties": {
                        "FID": 34,
                        "STATION": "Osgoode",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 23250,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1963
                    }
                },
                {
                    "type": "Feature",
                    "id": 35,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.379269276244514,
                            43.65238958405034
                        ]
                    },
                    "properties": {
                        "FID": 35,
                        "STATION": "Queen",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 58710,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 36,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.388303832955074,
                            43.654841528172028
                        ]
                    },
                    "properties": {
                        "FID": 36,
                        "STATION": "St. Patrick",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 119820,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1963
                    }
                },
                {
                    "type": "Feature",
                    "id": 37,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.380933456001216,
                            43.65635199963566
                        ]
                    },
                    "properties": {
                        "FID": 37,
                        "STATION": "Dundas",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 69150,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 38,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.390460370106595,
                            43.659865850925861
                        ]
                    },
                    "properties": {
                        "FID": 38,
                        "STATION": "Queen's Park",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 47390,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1963
                    }
                },
                {
                    "type": "Feature",
                    "id": 39,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.383083997543068,
                            43.66139039552295
                        ]
                    },
                    "properties": {
                        "FID": 39,
                        "STATION": "College",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 49340,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 40,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.383765567124499,
                            43.665250920116463
                        ]
                    },
                    "properties": {
                        "FID": 40,
                        "STATION": "Wellesley",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 23120,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 41,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.393547517367722,
                            43.667354906852289
                        ]
                    },
                    "properties": {
                        "FID": 41,
                        "STATION": "Museum",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 8220,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1963
                    }
                },
                {
                    "type": "Feature",
                    "id": 42,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.388680164455891,
                            43.677053208903452
                        ]
                    },
                    "properties": {
                        "FID": 42,
                        "STATION": "Rosedale",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 7520,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 43,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.391172416238959,
                            43.683340270357064
                        ]
                    },
                    "properties": {
                        "FID": 43,
                        "STATION": "Summerhill",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 5920,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 44,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.393970922913482,
                            43.688282925817198
                        ]
                    },
                    "properties": {
                        "FID": 44,
                        "STATION": "St. Clair",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 28680,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 45,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.397363180051585,
                            43.698049221947315
                        ]
                    },
                    "properties": {
                        "FID": 45,
                        "STATION": "Davisville",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 22970,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 46,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.398611022955052,
                            43.706617157538041
                        ]
                    },
                    "properties": {
                        "FID": 46,
                        "STATION": "Eglinton",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 70720,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1954
                    }
                },
                {
                    "type": "Feature",
                    "id": 47,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.402173932452868,
                            43.724970270885819
                        ]
                    },
                    "properties": {
                        "FID": 47,
                        "STATION": "Lawrence",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 22230,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1973
                    }
                },
                {
                    "type": "Feature",
                    "id": 48,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.406529085579436,
                            43.744182295289654
                        ]
                    },
                    "properties": {
                        "FID": 48,
                        "STATION": "York Mills",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 27260,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1973
                    }
                },
                {
                    "type": "Feature",
                    "id": 49,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.410943141497157,
                            43.76151994615585
                        ]
                    },
                    "properties": {
                        "FID": 49,
                        "STATION": "Sheppard-Yonge",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 123480,
                        "LINE2": "Sheppard",
                        "PLATFORM_1": "1",
                        "SUBWAY_TRA": "True",
                        "ADDRESS": " ",
                        "Opened": 1974
                    }
                },
                {
                    "type": "Feature",
                    "id": 50,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.412691664253515,
                            43.768802400576114
                        ]
                    },
                    "properties": {
                        "FID": 50,
                        "STATION": "North York Centre",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 25480,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1987
                    }
                },
                {
                    "type": "Feature",
                    "id": 51,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.415503631724462,
                            43.779840958989304
                        ]
                    },
                    "properties": {
                        "FID": 51,
                        "STATION": "Finch",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 97400,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1974
                    }
                },
                {
                    "type": "Feature",
                    "id": 52,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.405270555003469,
                            43.67032903733417
                        ]
                    },
                    "properties": {
                        "FID": 52,
                        "STATION": "Spadina",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 13040,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 53,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.407084482238218,
                            43.674980055678802
                        ]
                    },
                    "properties": {
                        "FID": 53,
                        "STATION": "Dupont",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 16870,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 54,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.415411891847086,
                            43.684131796015556
                        ]
                    },
                    "properties": {
                        "FID": 54,
                        "STATION": "St Clair West",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 53770,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 55,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.436184733718534,
                            43.699438242850228
                        ]
                    },
                    "properties": {
                        "FID": 55,
                        "STATION": "Eglinton West",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "2",
                        "AVG_PASSEN": 19850,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 56,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.441259896520663,
                            43.709555645901396
                        ]
                    },
                    "properties": {
                        "FID": 56,
                        "STATION": "Glencairn",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 5560,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 57,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.444170372397153,
                            43.715931361605541
                        ]
                    },
                    "properties": {
                        "FID": 57,
                        "STATION": "Lawrence West",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 20560,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 58,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.447858524723316,
                            43.72556460781928
                        ]
                    },
                    "properties": {
                        "FID": 58,
                        "STATION": "Yorkdale",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 24930,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 59,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.449990094735,
                            43.734222826365666
                        ]
                    },
                    "properties": {
                        "FID": 59,
                        "STATION": "Wilson",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 21680,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1978
                    }
                },
                {
                    "type": "Feature",
                    "id": 60,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.462450946763894,
                            43.749807091769469
                        ]
                    },
                    "properties": {
                        "FID": 60,
                        "STATION": "Downsview",
                        "LINE": "Yonge-University-Spadina",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 31600,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 1966
                    }
                },
                {
                    "type": "Feature",
                    "id": 61,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.387806319056338,
                            43.766772568945953
                        ]
                    },
                    "properties": {
                        "FID": 61,
                        "STATION": "Bayview",
                        "LINE": "Sheppard",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 8200,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 2002
                    }
                },
                {
                    "type": "Feature",
                    "id": 62,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.376651442678025,
                            43.769191846300529
                        ]
                    },
                    "properties": {
                        "FID": 62,
                        "STATION": "Bessarion",
                        "LINE": "Sheppard",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 2590,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 2002
                    }
                },
                {
                    "type": "Feature",
                    "id": 63,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.366829738758412,
                            43.770939658914955
                        ]
                    },
                    "properties": {
                        "FID": 63,
                        "STATION": "Leslie",
                        "LINE": "Sheppard",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 5610,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 2002
                    }
                },
                {
                    "type": "Feature",
                    "id": 64,
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -79.346265103798231,
                            43.775326812658328
                        ]
                    },
                    "properties": {
                        "FID": 64,
                        "STATION": "Don Mills",
                        "LINE": "Sheppard",
                        "PLATFORM_L": "1",
                        "AVG_PASSEN": 31500,
                        "LINE2": " ",
                        "PLATFORM_1": " ",
                        "SUBWAY_TRA": "False",
                        "ADDRESS": " ",
                        "Opened": 2002
                    }
                }
            ]
        }
    })

    //Draw GeoJSON as circles
    map.addLayer({
        'id': 'subwayStns-pnts',
        'type': 'circle',
        'source': 'subwayStns',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#b46b22'//'#B42222'
        }

    });

    //GeoJSON must direct to URL 
    map.addSource('subwayStns', {
        type: 'geojson',
        data: ''//'https://smith-lg.github.io/ggr472-lab2/data/torontomusicvenues.geojson'//'Data/EasternOntario.geojson'
        //'https://raw.githubusercontent.com/smith-lg/ggr472-lab2/main/data/torontomusicvenues.geojson'


    });

    //Draw GeoJSON as circles
    map.addLayer({
        'id': 'subwayStns-pnts',
        'type': 'circle',
        'source': 'subwayStns',
        'paint': {
            'circle-radius': 5,
            'circle-color': 'blue'
        }

    });

    
    //GeoJSON must direct to URL 
    map.addSource('easternON-att', {
        type: 'geojson',
        data: ''//'https://smith-lg.github.io/ggr472-lab2/data/torontomusicvenues.geojson'//'Data/EasternOntario.geojson'
        //'https://raw.githubusercontent.com/smith-lg/ggr472-lab2/main/data/torontomusicvenues.geojson'


    });

    //Draw GeoJSON as circles
    map.addLayer({
        'id': 'easternON-att-pnts',
        'type': 'circle',
        'source': 'easternON-att',
        'paint': {
            'circle-radius': 5,
            'circle-color': 'blue'
        }

    });

    //Draw GeoJSON labels using 'name' property
    map.addLayer({
        'id': 'easternON-att-labels',
        'type': 'symbol',
        'source': 'easternON-att',
        'layout': {
            'text-field': ['get', 'name'],
            'text-variable-anchor': ['bottom'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto'
        }
    });


    /*map.addSource('ontario-ct', { //Your source ID
        'type': 'vector',
        'url': 'mapbox://ireo.10igyals' //Your tileset link from mapbox
    });

    map.addLayer({
        'id': 'ontarioct',
        'type': 'fill',
        'source': 'ontario-ct', //must match source ID from addSource method
        'paint': {
            'fill-color': '#888888',
            'fill-opacity': 0.4,
            'fill-outline-color': 'white'
        },
        'source-layer': 'torontoct-84r9e1' //name of layer. Get this from mapbox tileset page
    },
        'uoft-buildings' //Drawing order - place below points
    );*/

});