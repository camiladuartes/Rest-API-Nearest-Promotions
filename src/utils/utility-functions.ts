export function latLongDistance(lat1: number, long1: number, lat2: number, long2: number): number {
    const pi = Math.PI;

    var radLat1 = lat1*pi/180;
    var radLong1 = long1*pi/180;
    var radLat2 = lat2*pi/180;
    var radLong2 = long2*pi/180;

    var distance = (Math.acos(Math.cos(radLat2)*Math.cos(radLong2)
                    *Math.cos(radLat1)*Math.cos(radLong1)+Math.cos(radLat2)
                    *Math.sin(radLong2)*Math.cos(radLat1)*Math.sin(radLong1)
                    +Math.sin(radLat2)*Math.sin(radLat1))*6371)*1.15;

    return distance;
}
