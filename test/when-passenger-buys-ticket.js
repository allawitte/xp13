'use strict';
"use strict";
var assert = require('chai').assert;
var Ticket = require('../src/ticket');
var Passenger = require('../src/passenger');


suite('when going to pay for a ticket', function () {
    test(' - I get 50% discount as student', function(){
        let passenger = new Passenger('general');
        let ticket = new Ticket();
        ticket.giveTicketToPassenger(passenger)
        assert.equal(passenger.hasTicketFor(), '100 rur');
    });
});
/**
 * Created by HP on 2/17/2017.
 */
