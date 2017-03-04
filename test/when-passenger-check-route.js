'use strict';
var assert = require('chai').assert;
var PassengerBuilder = require('../test/dsl/passenger-builder');
var Bus = require('../src/bus');


suite('when asks for a bus stop', function () {
    test(' - this bus has this bus stop', function(){
        let passenger = new PassengerBuilder()
            .withDestination('stop_3')
            .goIn();
        let bus = new Bus();
        bus.currentRouteIncludes(passenger);
        assert.equal(passenger.pass, true);
    });
});
/**
 * Created by HP on 3/3/2017.
 */
