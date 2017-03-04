'use strict';
class Passenger {
    constructor(status = '', route = '', prePaydCard = false) {
        this._route = route;
        this._hasTicket = false;
        this._status = status;
        this._tiketCost = '';
        this._prePaydCard = prePaydCard;
        this._accepted = false;
    }
    
    set pass(isAccepted){
        this._accepted = isAccepted;
    }
    
    get pass(){
        return this._accepted;
    }
    
    hasPrePaydCard(){
        return this._prePaydCard;
    }

   
    get route() {
        return this._route;
    }
    
    set ticket(value){
        this._hasTicket = value;
    }
    
    get ticket(){
        return this._hasTicket;
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
