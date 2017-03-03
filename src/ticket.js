'use strict';
class Ticket {
    constructor(amount){
       this._ticket = {
           'general': 100,
           'student': 50,
           'pension': 0
       }
        this._amount = amount;


    }
    giveTicket(passenger){
        this._passengerStatus = passenger.status;
    }
    get price(){
        console.log('this._ticket[this._passengerStatus]', this._ticket[this._passengerStatus]);
        return this._ticket[this._passengerStatus]*this._amount + ' rur';
    }
}

module.exports = Ticket;
/**
 * Created by HP on 2/17/2017.
 */
