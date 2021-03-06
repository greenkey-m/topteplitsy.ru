/* ==============================================
GOOGLE MAP
=============================================== */

$(document).ready(function () {

    'use strict';

    // Map Coordination

    var latlng = new google.maps.LatLng(55.348524, 36.341033);

    // Map Options
    var myOptions = {
        zoom: 9,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        // Google Map Color Styles
        styles: [{"stylers": [{"saturation": -100}, {"gamma": 1}]}, {
            "elementType": "labels.text.stroke",
            "stylers": [{"visibility": "off"}]
        }, {"featureType": "poi.business", "elementType": "labels.text", "stylers": [{"visibility": "off"}]},
            {
                "featureType": "poi.business",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.text",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {"featureType": "road", "elementType": "geometry", "stylers": [{"visibility": "simplified"}]},
            {
                "featureType": "water",
                "stylers": [{"visibility": "on"}, {"saturation": 50}, {"gamma": 0}, {"hue": "#50a5d1"}]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#333333"}]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{"weight": 0.5}, {"color": "#333333"}]
            }, {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [{"gamma": 1}, {"saturation": 50}]
            }]
    };

    var map = new google.maps.Map(document.getElementById('google_map'), myOptions);

    // Marker Image
    var image = 'images/marker.png';

    /* ========= First Marker ========= */

    // First Marker Coordination

    var myLatlng = new google.maps.LatLng(55.174842, 36.673233);

    // Your Texts

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h4>' +

        'Выставочный стенд Балабаново' +

        '</h4>' +
        '<p>' +

        'Здесь вы можете посмотреть наши теплицы' +

        '</p>' +
        '</div>';


    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Теплицы "Триумф"',
        icon: image
    });


    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    /* ========= End First Marker ========= */


    /* ========= Second Marker ========= */

    // Second Marker Coordination

    var myLatlngSecond = new google.maps.LatLng(55.539849, 36.009278);

    // Your Texts

    var contentStringSecond = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h4>' +
        'Выставочный стенд Можайск' +
        '</h4>' +
        '<p>' +

        'Здесь вы можете посмотреть наши теплицы.' +

        '</p>' +
        '</div>';

    var infowindowSecond = new google.maps.InfoWindow({
        content: contentStringSecond,
    });

    var markerSecond = new google.maps.Marker({
        position: myLatlngSecond,
        map: map,
        title: 'Теплицы "Триумф"',
        icon: image
    });

    google.maps.event.addListener(markerSecond, 'click', function () {
        infowindowSecond.open(map, markerSecond);
    });
    /* ========= End Second Marker ========= */


    /* ========= Third Marker ========= */
    var myLatlngSecond = new google.maps.LatLng(55.514359, 36.019816);

    var contentStringSecond = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h4>' +
        'Выставочный стенд Можайск' +
        '</h4>' +
        '<p>' +
        'ТЦ "Полгоры", здесь вы можете посмотреть наши теплицы.' +
        '</p>' +
        '</div>';

    var infowindow5 = new google.maps.InfoWindow({
        content: contentStringSecond,
    });

    var marker5 = new google.maps.Marker({
        position: myLatlngSecond,
        map: map,
        title: 'Теплицы "Триумф"',
        icon: image
    });

    google.maps.event.addListener(marker5, 'click', function () {
        infowindow5.open(map, marker5);
    });

    /* ========= End Second Marker ========= */




    var myLatlngSecond = new google.maps.LatLng(55.382893, 36.741969);
    var contentStringSecond = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h4>' +
        'Магазин в Наро-Фоминске' +
        '</h4>' +
        '<p>' +
        '(926) 277-88-22' +
        '</p>' +
        '</div>';
    var infowindow3 = new google.maps.InfoWindow({
        content: contentStringSecond,
    });
    var marker3 = new google.maps.Marker({
        position: myLatlngSecond,
        map: map,
        title: 'Теплицы "Триумф"',
        icon: image
    });
    google.maps.event.addListener(marker3, 'click', function () {
        infowindow3.open(map, marker3);
    });


    var myLatlngSecond = new google.maps.LatLng(55.428452, 37.560666);
    var contentStringSecond = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h4>' +
        'Магазин в Подольске' +
        '</h4>' +
        '<p>' +
        '<a href="https://flamingomarket.ru" style="color: blue;">flamingomarket.ru</a>' +
        '</p>' +
        '</div>';
    var infowindow4 = new google.maps.InfoWindow({
        content: contentStringSecond,
    });
    var marker4 = new google.maps.Marker({
        position: myLatlngSecond,
        map: map,
        title: 'Теплицы "Триумф"',
        icon: image
    });
    google.maps.event.addListener(marker4, 'click', function () {
        infowindow4.open(map, marker4);
    });


});
