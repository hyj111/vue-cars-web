let geolocation = null

export function SelfLocation(params) {
    //  浏览器定位
    if (!geolocation) {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：5s          
            showCircle: false,
            showMarker: false,
            zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点

        });
    }
    params.map.addControl(geolocation);
    geolocation.getCurrentPosition();
    if (params.complete && typeof params.complete == 'function') {

        AMap.event.addListener(geolocation, 'complete', params.complete); //定位成功
    }
    if (params.error && typeof params.complete == 'function') {
        AMap.event.addListener(geolocation, 'error', params.error); //定位失败
    }
};

