'use strict';

describe("Testing Modules", function() {
    var module = angular.module("twangularApp");

    it ("should be registered", function() {
        expect(module).toBeDefined();
    });
});