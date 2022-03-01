function townsToJSON(arr) {
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        let [empty, town, latitude, longitude, empty2] = arr[i].split('|');
        const obj = {}
        obj["Town"] = town.trim();
        obj["Latitude"] = Math.round(((Number(latitude.trim())) * 100)) / 100;
        obj["Longitude"] = Math.round(((Number(longitude.trim())) * 100)) / 100;
        result.push(obj);
    }
    return JSON.stringify(result);
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);