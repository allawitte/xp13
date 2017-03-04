'use strict';
class Bus {
    constructor() {
        this._isReady = false;
        this._busStops = [
            'stop_1', 'stop_2', 'stop_3', 'stop_4', 'stop_5'
        ];
    }

    takeDriver(driver) {
        this._isReady = true;
        return this._isReady;
    }

    isReadyForTrip() {
        return this._isReady;
    }

    currentRouteIncludes(passenger) {
        if(this._busStops.indexOf(passenger.route) > -1){
            return true; 
        }
        
        else return false;
    }


}
module.exports = Bus;
/**
 * Created by HP on 2/15/2017.
 */
