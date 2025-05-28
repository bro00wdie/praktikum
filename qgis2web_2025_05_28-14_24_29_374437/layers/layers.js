ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([681451.563721, 9182800.619886, 701208.213670, 9199585.219680]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 2,4km (30 menit)<br />' });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_2.png" /> univ_surabaya'
            });

lyr_OSMStandard_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_aksesibilitas_univunion_1,lyr_univ_surabaya_2];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'universitas': 'universitas', 'gedung': 'gedung', 'foto': 'foto', 'Deskripsi Univ_QS WUR': 'rangking', 'Deskripsi Univ_Didirikan': 'tahun didirikan', 'Deskripsi Univ_Fakultas': 'fakultas', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'universitas': 'TextEdit', 'gedung': 'TextEdit', 'foto': 'ExternalResource', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'no label', 'Access': 'inline label - always visible', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'no label', 'universitas': 'inline label - always visible', 'gedung': 'inline label - always visible', 'foto': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'inline label - always visible', 'Deskripsi Univ_Didirikan': 'inline label - always visible', 'Deskripsi Univ_Fakultas': 'inline label - always visible', });
lyr_univ_surabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});