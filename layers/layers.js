var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_DevelopmentLevel_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Development Level",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DevelopmentLevel_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_Nighttimelight_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Night time light",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nighttimelight_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_TimeDistance_Sch_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Time Distance_Sch",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TimeDistance_Sch_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_TimeDistance_PS_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Time Distance_PS",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TimeDistance_PS_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_ResidualPop_PHCs_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Residual Pop_PHCs",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ResidualPop_PHCs_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [355988.731381, 712552.977114, 379350.100570, 725540.539311]
                            })
                        });
var lyr_TimeDistance_HF_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Time Distance_HF",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TimeDistance_HF_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_TAX_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "TAX",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TAX_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_BuildingValue_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "BuildingValue",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BuildingValue_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_PopulationDiscrete_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Population Discrete",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PopulationDiscrete_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_PopulationContinuous_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Population Continuous",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PopulationContinuous_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_GrossArea_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Gross Area",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GrossArea_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_BuildingHeight_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Building Height",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BuildingHeight_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_ResidentialArea_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Residential Area",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ResidentialArea_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120103, 713018.335198, 378337.403923, 725338.764149]
                            })
                        });
var lyr_Landuse_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "Landuse",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landuse_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [356035.120092, 713018.335167, 378337.403912, 725338.764118]
                            })
                        });
var format_PHCs_16 = new ol.format.GeoJSON();
var features_PHCs_16 = format_PHCs_16.readFeatures(json_PHCs_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PHCs_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PHCs_16.addFeatures(features_PHCs_16);
var lyr_PHCs_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PHCs_16, 
                style: style_PHCs_16,
                popuplayertitle: "PHCs",
                interactive: false,
                title: '<img src="styles/legend/PHCs_16.png" /> PHCs'
            });
var format_PoliceSt_17 = new ol.format.GeoJSON();
var features_PoliceSt_17 = format_PoliceSt_17.readFeatures(json_PoliceSt_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoliceSt_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoliceSt_17.addFeatures(features_PoliceSt_17);
var lyr_PoliceSt_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoliceSt_17, 
                style: style_PoliceSt_17,
                popuplayertitle: "Police St.",
                interactive: false,
                title: '<img src="styles/legend/PoliceSt_17.png" /> Police St.'
            });
var format_Schools_18 = new ol.format.GeoJSON();
var features_Schools_18 = format_Schools_18.readFeatures(json_Schools_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_18.addFeatures(features_Schools_18);
var lyr_Schools_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_18, 
                style: style_Schools_18,
                popuplayertitle: "Schools",
                interactive: false,
                title: '<img src="styles/legend/Schools_18.png" /> Schools'
            });
var format_Wards_19 = new ol.format.GeoJSON();
var features_Wards_19 = format_Wards_19.readFeatures(json_Wards_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_19.addFeatures(features_Wards_19);
var lyr_Wards_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_19, 
                style: style_Wards_19,
                popuplayertitle: "Wards",
                interactive: false,
                title: '<img src="styles/legend/Wards_19.png" /> Wards'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleMap_1.setVisible(false);lyr_DevelopmentLevel_2.setVisible(false);lyr_Nighttimelight_3.setVisible(false);lyr_TimeDistance_Sch_4.setVisible(false);lyr_TimeDistance_PS_5.setVisible(false);lyr_ResidualPop_PHCs_6.setVisible(false);lyr_TimeDistance_HF_7.setVisible(false);lyr_TAX_8.setVisible(false);lyr_BuildingValue_9.setVisible(false);lyr_PopulationDiscrete_10.setVisible(false);lyr_PopulationContinuous_11.setVisible(false);lyr_GrossArea_12.setVisible(false);lyr_BuildingHeight_13.setVisible(false);lyr_ResidentialArea_14.setVisible(false);lyr_Landuse_15.setVisible(true);lyr_PHCs_16.setVisible(false);lyr_PoliceSt_17.setVisible(false);lyr_Schools_18.setVisible(false);lyr_Wards_19.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleMap_1,lyr_DevelopmentLevel_2,lyr_Nighttimelight_3,lyr_TimeDistance_Sch_4,lyr_TimeDistance_PS_5,lyr_ResidualPop_PHCs_6,lyr_TimeDistance_HF_7,lyr_TAX_8,lyr_BuildingValue_9,lyr_PopulationDiscrete_10,lyr_PopulationContinuous_11,lyr_GrossArea_12,lyr_BuildingHeight_13,lyr_ResidentialArea_14,lyr_Landuse_15,lyr_PHCs_16,lyr_PoliceSt_17,lyr_Schools_18,lyr_Wards_19];
lyr_PHCs_16.set('fieldAliases', {'uniq_id': 'uniq_id', 'latitude': 'latitude', 'longitude': 'longitude', 'wardname': 'wardname', 'lganame': 'lganame', 'statename': 'statename', 'category': 'category', 'Ownership': 'Ownership', 'PHC_Type': 'PHC_Type', 'prmry_name': 'prmry_name', });
lyr_PoliceSt_17.set('fieldAliases', {'FID_1': 'FID_1', 'uniq_id': 'uniq_id', 'plc_st_nam': 'plc_st_nam', });
lyr_Schools_18.set('fieldAliases', {'uniq_id': 'uniq_id', 'education': 'education', 'management': 'management', 'name': 'name', 'source': 'source', });
lyr_Wards_19.set('fieldAliases', {'wardname': 'wardname', });
lyr_PHCs_16.set('fieldImages', {'uniq_id': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'wardname': 'TextEdit', 'lganame': 'TextEdit', 'statename': 'TextEdit', 'category': 'TextEdit', 'Ownership': 'TextEdit', 'PHC_Type': 'TextEdit', 'prmry_name': 'TextEdit', });
lyr_PoliceSt_17.set('fieldImages', {'FID_1': 'TextEdit', 'uniq_id': 'TextEdit', 'plc_st_nam': 'TextEdit', });
lyr_Schools_18.set('fieldImages', {'uniq_id': 'TextEdit', 'education': 'TextEdit', 'management': 'TextEdit', 'name': 'TextEdit', 'source': 'TextEdit', });
lyr_Wards_19.set('fieldImages', {'wardname': 'TextEdit', });
lyr_PHCs_16.set('fieldLabels', {'uniq_id': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'wardname': 'no label', 'lganame': 'no label', 'statename': 'no label', 'category': 'no label', 'Ownership': 'no label', 'PHC_Type': 'no label', 'prmry_name': 'no label', });
lyr_PoliceSt_17.set('fieldLabels', {'FID_1': 'no label', 'uniq_id': 'no label', 'plc_st_nam': 'no label', });
lyr_Schools_18.set('fieldLabels', {'uniq_id': 'no label', 'education': 'no label', 'management': 'no label', 'name': 'no label', 'source': 'no label', });
lyr_Wards_19.set('fieldLabels', {'wardname': 'no label', 'wardcode': 'no label', 'lganame': 'no label', 'lgacode': 'no label', 'statename': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Population': 'no label', 'm0': 'no label', 'm1': 'no label', 'm5': 'no label', 'm10': 'no label', 'm15': 'no label', 'm20': 'no label', 'm25': 'no label', 'm30': 'no label', 'm35': 'no label', 'm40': 'no label', 'm45': 'no label', 'm50': 'no label', 'm55': 'no label', 'm60': 'no label', 'm65': 'no label', 'm70': 'no label', 'm75': 'no label', 'm80': 'no label', 'f0': 'no label', 'f1': 'no label', 'f5': 'no label', 'f10': 'no label', 'f15': 'no label', 'f20': 'no label', 'f25': 'no label', 'f30': 'no label', 'f35': 'no label', 'f40': 'no label', 'f45': 'no label', 'f50': 'no label', 'f55': 'no label', 'f60': 'no label', 'f65': 'no label', 'f70': 'no label', 'f75': 'no label', 'f80': 'no label', 'Density': 'no label', 'P0': 'no label', 'P1': 'no label', 'P5': 'no label', 'P10': 'no label', 'P15': 'no label', 'P20': 'no label', 'P25': 'no label', 'P30': 'no label', 'P35': 'no label', 'P40': 'no label', 'P45': 'no label', 'P50': 'no label', 'P55': 'no label', 'P60': 'no label', 'P65': 'no label', 'P70': 'no label', 'P75': 'no label', 'P80': 'no label', });
lyr_Wards_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});