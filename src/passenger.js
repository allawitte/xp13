'use strict';
class Passenger {
    constructor(status = '', route = '', monthCard = false) {
        this._route = route;
        this._hasTicket = false;
        this._status = status;
        this._tiketCost = '';
        this._monthCard = monthCard;
    }
    
    hasMonthCard(){
        return this._monthCard;
    }

   
    get route() {
        return this._route;
    }
    
    set ticket(value){
        this._hasTicket = value;
    }

   
    get status(){
        return this._status;
    }
    
    hasTicketFor(){
        return this._tiketCost;
    }

}

module.exports = Passenger;
/**
 * Created by HP on 2/15/2017.
 */
