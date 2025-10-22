window.addEventListener('load', function() {
  // 🗺️ Koordinatlar (Güdül, Ankara)
  const lon = 32.2456;
  const lat = 40.2106;
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
      zoom: 13
    })
  });

  // 📍 Güdül pin (işaretleyici)
  const gudulMarker = new ol.Feature({
    geometry: new ol.geom.Point(target),
    name: 'Güdül, Ankara'
  });

  const gudulStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      scale: 0.07
    })
  });
  gudulMarker.setStyle(gudulStyle);

  // 📦 Katman ve kaynak ekle
  const vectorSource = new ol.source.Vector({
    features: [gudulMarker]
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





