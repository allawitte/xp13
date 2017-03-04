'use strict';
let Passenger = require('../../src/passenger');
class PassengerBuilder {
    constructor() {
        this._ticketType = '';
        this._tiketCost = '';
        this._busStop = '';
        this._prePaydCard = '';

    }

    withStatus(_status) {
        this._ticketType = _status;
        return this;
    }

    withDestination(busStop){
        this._busStop = busStop;
        return this;
    }

    withPrePaydCard(prePaydCard){
        this._prePaydCard = prePaydCard;
        return this;
    }


    
    goIn(){
        return new Passenger(this._ticketType, this._busStop, this._prePaydCard);
    }
}

module.exports = PassengerBuilder;
/**
 * Created by HP on 2/17/2017.
 */
