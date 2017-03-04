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
    
    letIn(passenger){
        if (passenger.thicket || passenger.hasPrePaydCard()){
            passenger.pass = true;
            return true;

        }
        else {
            passenger.pass = false;
            return false;
        }
        
    }

    currentRouteIncludes(passenger) {
        if(this._isHasRoute(passenger.route)){
            passenger.pass = true;
            return true;
        }
        else {
            passenger.pass = false;
            return false;
        }
    }
    _isHasRoute(route){
        if(this._busStops.indexOf(route) > -1){
            return true;
        }

        else return false;
    }


}
module.exports = Bus;
/**
 * Created by HP on 2/15/2017.
 */
