//Likes
jQuery(document).ready(function () {
    var pageTitle = $("#title").text();
    var likesKey = "likes_" + pageTitle;
    var likes = localStorage.getItem(likesKey);
    updateLikes(likes);

    jQuery("#like").click(function () {
        var likesCount = localStorage.getItem(likesKey);
        likesCount++;
        updateLikes(likesCount);
        localStorage.setItem(likesKey, likesCount);
    });
});

function updateLikes(likesCount) {
    jQuery('#heart-counter').text(likesCount);
}

// Google Map
function regular_map() {
    var var_location = new google.maps.LatLng(50.031499, 19.907050);

    var var_mapoptions = {
        center: var_location,
        zoom: 16
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Jagiellonian University"
    });
    var contentString = '<div class="info-window">' +
        '<h3>Jagiellonian University, Faculty of Mathematics and Information Technologies</h3>' +
        '<div class="info-content">' +
        '<p>Fames ac turpis egestas sed tempus urna et pharetra. Amet porttitor eget dolor morbi non arcu risus quis.</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    var_marker.addListener('click', function () {
        infowindow.open(var_map, var_marker);
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);
