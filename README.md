# javascript [![Build Status](https://travis-ci.org/dudu84/javascript.svg?branch=master)](https://travis-ci.org/dudu84/javascript)
Javascript examples

## 1. Arrow notations reductions

Consider the example:
    
    function add(factor) {
        return function(x) {
	    return x + factor;
        }
    }

Can be coded using arrow notation as:

    const add = (factor) => (x) => x + factor;

## 2 . Tests
To run the tests: `mocha run` or `npm test` at the project's root folder
