'use strict';
let Ticket = require('../../src/ticket');
let Passenger = require('../../src/passenger');
class PassengerBuilder {
    constructor() {
        this._ticketType = '';
        this._tiketCost = '';

    }

    withStatus(_status) {
        this._ticketType = _status;
        return this;
    }

    pay() {
        return new Passenger(this._ticketType);
    }
}

module.exports = PassengerBuilder;
/**
 * Created by HP on 2/17/2017.
 */
