'use strict';
"use strict";
var assert = require('chai').assert;
var Ticket = require('../src/ticket');
var PassengerBuilder = require('../test/dsl/passenger-builder');
var TicketBuilder = require('../test/dsl/ticket-builder');


suite('when going to pay for a ticket', function () {
    test(' - I get 100% discount as general passenger', function(){

        let ticket = new TicketBuilder()
            .withType('general')
            .withAmount(1)
            .buy();

        let passenger = new PassengerBuilder()
            .withStatus('general')
            .pay();

        ticket.giveTicket(passenger);
        assert.equal(ticket.price, '100 rur');
    });
});
/**
 * Created by HP on 2/17/2017.
 */
