'use strict';
let Passenger = require('../../src/passenger');
class PassengerBuilder {
    constructor() {
        this._ticketType = '';
        this._tiketCost = '';
        this._busStop = '';

    }

    withStatus(_status) {
        this._ticketType = _status;
        return this;
    }

    withDestination(busStop){
        this._busStop = busStop;
        return this;
    }

    pay() {
        return new Passenger(this._ticketType, this._busStop);
    }
    
    checkRoute(){
        return new Passenger(this._ticketType, this._busStop);
    }
}

module.exports = PassengerBuilder;
/**
 * Created by HP on 2/17/2017.
 */
