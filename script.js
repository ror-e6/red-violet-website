function gigLocation1() {
    
    var location = document.getElementById('location1').innerHTML;

    var link = 'https://www.google.com/maps/search/?api=1&query=';
    location = location.replace(/\s/g, '+');
    link += location
    var redirectWindow = window.open(link, '_blank');
    redirectWindow.location;
}

function gigLocation2() {
    
    var location = document.getElementById('location2').innerHTML;

    var link = 'https://www.google.com/maps/search/?api=1&query=';
    location = location.replace(/\s/g, '+');
    link += location
    var redirectWindow = window.open(link, '_blank');
    redirectWindow.location;
}