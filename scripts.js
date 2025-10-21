// scripts.js — OpenLayers harita örneği (Hacettepe Üniversitesi pinli)
window.addEventListener('load', function() {
  // 🗺️ Koordinatlar (Hacettepe Üniversitesi Beytepe Kampüsü)
  const lon = 32.734444;
  const lat = 39.867222;
  const target = ol.proj.fromLonLat([lon, lat]);

  // 🌍 Harita oluştur
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: target,
      zoom: 15
    })
  });

  // 📍 Hacettepe pin (işaretleyici)
  const hacettepeMarker = new ol.Feature({
    geometry: new ol.geom.Point(target),
    name: 'Hacettepe Üniversitesi - Beytepe Kampüsü'
  });

  
  const hacettepeStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      scale: 0.07
    })
  });
  hacettepeMarker.setStyle(hacettepeStyle);

  // 📦 Katman ve kaynak ekle
  const vectorSource = new ol.source.Vector({
    features: [hacettepeMarker]
  });
  const markerLayer = new ol.layer.Vector({
    source: vectorSource
  });
  map.addLayer(markerLayer);

  // 🖱️ Pin tıklama olayı (alert popup)
  map.on('singleclick', function(evt) {
    map.forEachFeatureAtPixel(evt.pixel, function(feature) {
      if (feature.get('name')) {
        alert(feature.get('name'));
      }
    });
  });
});



