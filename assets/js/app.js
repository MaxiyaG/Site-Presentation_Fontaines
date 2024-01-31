var map = L.map('mapid');


// Ajouter un fond de carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Obtenir la position de l'utilisateur
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Centrer la carte sur la position de l'utilisateur
        map.setView([position.coords.latitude, position.coords.longitude], 14);

        // Ajouter un marqueur à la position de l'utilisateur
        L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
            .bindPopup('Vous êtes ici !').openPopup();
    });
} else {
    alert("La géolocalisation n'est pas supportée par votre navigateur.");
}

// Ajouter les marqueurs
var markers = [
    {
        name: "Fontaine de Neuville-sur-Oise",
        address: "95000 Neuville-sur-Oise",
        latlng: [49.023088, 2.050934]
    },
    {
        name: "Fontaine Ile de Loisirs de Cergy-Pontoise",
        address: "Rue des Étangs, 95000 Cergy-Pontoise",
        latlng: [49.032472, 2.044855]
    },
    {
        name: "Fontaine Parc François Mitterrand",
        address: "Parc François Mitterrand, 9500 Cergy-Pontoise",
        latlng: [49.035424, 2.074057]
    },
    {
        name: "Fontaine Parc des Larris",
        address: "15 Clos des Larris, 95300 Pontoise",
        latlng: [49.034936, 2.093456]
    },
    {
        name: "Fontaine Parc du Château",
        address: "17 Rue du Château, 95300 Pontoise",
        latlng: [49.048060, 2.099730]
    },
    {
        name: "Fontaine Jardin des lavandières",
        address: "Jardin des lavandières, 95300 Pontoise",
        latlng: [49.052019, 2.087973]
    },
    {
        name: "Fontaine Jardin des Cinq Sens",
        address: "Jardin des Cinq Sens, 95300 Pontoise",
        latlng: [49.048202, 2.099356]
    },
    {
        name: "Fontaine Bois de cergy",
        address: "Aire de jeux du Pommier, Bois de cergy, 101 Rue du Bruloir, 95000 Cergy",
        latlng: [49.027835, 2.073575]
    },
    {
        name: "Fontaine 24H VTT de CERGY",
        address: "Bd des Maraîchers, 95000 Cergy",
        latlng: [49.025117, 2.085018]
    },
    {
        name: "Fontaine Royaume des enfants",
        address: "Île de loisirs de Cergy, Rue des Étangs, 95000 Neuville-sur-Oise",
        latlng: [49.025215, 2.051770]
    }
];

markers.forEach(function(marker) {
    var popupContent = '<div class="info_content">' +
        '<h3 class="info_location_name">' + marker.name + '</h3>' +
        '<p class="info_location_text">' + marker.address + '</p>' 
        
        '</div>';

    L.marker(marker.latlng).addTo(map).bindPopup(popupContent);
});

// Ajouter un bouton pour passer en mode plein écran
L.control.fullscreen({
    position: 'topright'
}).addTo(map);
