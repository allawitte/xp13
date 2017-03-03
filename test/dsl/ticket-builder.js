'use strict';
var Ticket = require('../../src/ticket');

class TicketBuilder {
    constructor(){
        this._type = '';
        this._amount = 0;
    }

    withType(type){
        this._type = type;
        return this;
    }
    withAmount(amount){
       this._amount = amount;
        return this;
    }
    buy(){
        return new Ticket(this._amount);
    }
}

module.exports = TicketBuilder;
/**
 * Created by HP on 2/17/2017.
 */
