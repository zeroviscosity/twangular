'use strict';

describe('Testing Filters', function () {
    beforeEach(module('twangularApp'));
	
	var sample = 'This is a #test for @username';
	
	describe('formatDate', function () {
        it('should format a date time into a friendlier format', inject(function (formatDateFilter) {
            expect(formatDateFilter('2013-02-02 19:47:04'))
              .toEqual('2 Feb 2:47 pm');
        }));
    });
	
    describe('hashtagLinky', function () {
        it('should turn a hashtag into a link', inject(function (hashtagLinkyFilter) {
            expect(hashtagLinkyFilter(sample))
              .toEqual('This is a <a href="https://twitter.com/search?src=hash&q=%23test" target="_blank">#test</a> for @username');
        }));
    });
    
    describe('usernameLinky', function () {
        it('should turn a username into a link', inject(function (usernameLinkyFilter) {
            expect(usernameLinkyFilter(sample))
              .toEqual('This is a #test for <a href="https://twitter.com/username" target="_blank">@username</a>');
        }));
    });
});