let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 18.5204, lng: 73.8567 },
    zoom: 8,
  });
}

initMap();