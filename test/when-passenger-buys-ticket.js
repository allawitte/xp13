'use strict';
"use strict";
var assert = require('chai').assert;
var Ticket = require('../src/ticket');
var PassengerBuilder = require('../test/dsl/passenger-builder');


suite('when going to pay for a ticket', function () {
    test(' - I get 100% discount as general passenger', function(){
        let passenger = new PassengerBuilder('general');
        let ticket = new Ticket();
        ticket.giveTicketToPassenger(passenger);
        assert.equal(passenger.hasTicketFor(), '100 rur');
    });
});
/**
 * Created by HP on 2/17/2017.
 */
