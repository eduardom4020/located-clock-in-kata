class Location {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    async get() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                ({coords}) => { resolve([coords.latitude, coords.longitude]) },
                (err) => { reject(err) }
            );
        }).then( ([latitude, longitude]) => {
            const lat = this.latitude != null ? this.latitude : latitude;
            const long = this.longitude != null ? this.longitude : longitude;

            return [lat, long];
        });
    }
}