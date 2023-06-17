// leaflet.js map settings

//stamen layer
// var layer = new L.StamenTileLayer("toner");
// var map = new L.Map("map", {
//     center: new L.LatLng(41.481286, -71.31034),
//     zoom: 12
// });
// map.addLayer(layer);

// map
var map = L.map('map').setView([41.481286, -71.31034], 13);
// marker
var marker = L.marker([41.481286, -71.31034]).addTo(map);
// popup
marker.bindPopup("<b>Modern Art Gallery</b><br>Newport,RI 02840").openPopup();

//map tile - Uses stamen's Toner tile rather than OpenStreetMap default tile to render map
L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}).addTo(map);