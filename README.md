# javascript [![Build Status](https://travis-ci.org/dudu84/javascript.svg?branch=master)](https://travis-ci.org/dudu84/javascript)
Javascript Map, Filter, Reduce examples

This project was built with the intention to learn and also to serve as a source for the ones who are seeking to learn.
Each one of Map, Reduce and Filter were implemented as modules aiming to solidify the understading about this very important concept.

Other ES6 concepts are used as: arrow notation and destructuring.  

Implemented with TDD.


Uses Mocha, Chai, Grunt.

## 1. Arrow notation reductions

Consider the example:
    
    function add(factor) {
        return function(x) {
            return x + factor;
        }
    }

Can be coded using arrow notation as:

    const add = (factor) => (x) => x + factor;

## 2. Tests
To run the tests: `mocha run` or `npm test` at the project's root folder

## 3. Lint
To lint type: `grunt jshint`
