'use strict';
var assert = require('chai').assert;
var PassengerBuilder = require('../test/dsl/passenger-builder');
var Bus = require('../src/bus');


suite('when passenger has a month card', function () {
    test(' - bus driver lets him in', function () {
        let passenger = new PassengerBuilder()
            .withPrePydCard(true)
            .goIn();
        let bus = new Bus();
        assert.equal(bus.letIn(passenger), true);
    });
});
/**
 * Created by HP on 3/3/2017.
 */
