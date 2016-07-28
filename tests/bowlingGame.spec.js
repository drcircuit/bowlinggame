/**
 * Created by Espen on 7/28/2016.
 */
var expect = require('chai').expect;
describe('Bowling Game Tests', function () {
    it('Should run!', function () {
        expect(true).to.be.true;
    });
});
describe("The Bowling Game", function () {
    var bowling;
    beforeEach(function () {
        bowling = require('../bowlingGame/bowling')();
    });
    function rollPins(rolls, pinsDown) {
        for(var r = 0;r<rolls;r++){
            bowling.roll(pinsDown);
        }
    };
    it('Should be available', function () {
        expect(bowling).not.to.be.undefined;
    });
    it('Should have a roll function', function () {
        expect(bowling.roll).to.be.a('function');
    });
    it('Should have a score function', function () {
        expect(bowling.score).to.be.a('function');
    });
    it('Should be able to score a gutter game', function () {
        rollPins(20,0);
        expect(bowling.score()).to.equal(0);
    });
    it('Should score a game with 1 pin down', function () {
        bowling.roll(1);
        rollPins(19,0);
        expect(bowling.score()).to.equal(1);
    });
    it('Should score a game with only single pin rolls', function () {
        rollPins(20,1);
        expect(bowling.score()).to.equal(20);
    });
    it('Should not score two rolls in different frames as spare', function () {
        bowling.roll(0);
        bowling.roll(5);
        bowling.roll(5);
        rollPins(17,0);
        expect(bowling.score()).to.equal(10);
    });
    it('Should score a game with single spare', function () {
        bowling.roll(4);
        bowling.roll(6);
        bowling.roll(5);
        rollPins(17,0);
        expect(bowling.score()).to.equal(20);
    });
    it('Should score a game with a single strike', function () {
        bowling.roll(10);
        bowling.roll(4);
        bowling.roll(3);
        rollPins(16,0);
        expect(bowling.score()).to.equal(24);
    });
    it('Should score a game with only spares', function () {
        rollPins(21,5);
        expect(bowling.score()).to.equal(150);
    });
    it('Should score a perfect game', function () {
        rollPins(12, 10);
        expect(bowling.score()).to.equal(300);
    });
});