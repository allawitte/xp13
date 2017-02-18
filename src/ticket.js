'use strict';
class Ticket {
    constructor(){
       this._ticket = {
           'general': '100 rur',
           'student': '50 rur',
           'pension': '0 rur'
       }
    }
    giveTicketToPassenger(passenger){
        passenger.buyTicket(this._ticket[passenger.status]);
        return this._ticket[passenger.status];
    }
}

module.exports = Ticket;
/**
 * Created by HP on 2/17/2017.
 */
