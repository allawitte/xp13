'use strict';
class Passenger {
    constructor(status, route) {
        this._route = route;
        this._hasTicket = false;
        this._status = status;
        this._tiketCost = '';
    }

    buyTicket(ticket){
        this._tiketCost = ticket;
    }

    askRoute(currentRoute) {
        this._route = currentRoute;
        return this._route;
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
