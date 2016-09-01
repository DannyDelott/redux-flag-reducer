#!/bin/bash
./node_modules/.bin/mocha-webpack --webpack-config ./webpack.config.test.js --recursive 'test/*.spec.js' $*
