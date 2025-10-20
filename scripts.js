// scripts.js — OpenLayers harita örneği
window.addEventListener('load', function(){
  const lon = 32.734444;
  const lat = 39.867222;
  const target = ol.proj.fromLonLat([lon, lat]);

  const map = new ol.Map({
    target: 'map',
    layers: [ new ol.layer.Tile({ source: new ol.source.OSM() }) ],
    view: new ol.View({ center: target, zoom: 15 })
  });

  const marker = new ol.Feature({
    geometry: new ol.geom.Point(target),
    name: 'Hacettepe (yaklaşık)'
  });

  const vectorSource = new ol.source.Vector({ features: [marker] });
  const markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'https://cdn.jsdelivr.net/gh/mapbox/maki@v1.2.0/icons/marker-15.svg',
      scale: 1.6
    })
  });

  const markerLayer = new ol.layer.Vector({ source: vectorSource, style: markerStyle });
  map.addLayer(markerLayer);
});


