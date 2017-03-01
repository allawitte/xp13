'use strict';
let Ticket = require('../../src/ticket');
class PassengerBuilder {
    constructor(){
        this._ticket = '';
        this._tiketCost = '';

    }
    isGeneralPassenger(){
        this._ticket = 'general';
        return 'general';
    }
    isStudent(){
        this._ticket = 'student';
        return 'student';
    }
    isPensioner(){
        this._ticket = 'pensioner';
        return 'pensioner';
    }
    buyTicket(ticket){
        this._tiketCost = ticket;
    }
    hasTicketFor(){
        return this._tiketCost;
    }
    pay(){
        let ticket = new Ticket();
        
    }
}

module.exports = PassengerBuilder;
/**
 * Created by HP on 2/17/2017.
 */
