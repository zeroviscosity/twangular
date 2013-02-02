'use strict';

describe("Testing Controllers", function() {
    var module = angular.module("twangularApp");

    it ("should be registered", function() {
        expect(module.controller('MainCtrl')).toBeDefined();
    });
});