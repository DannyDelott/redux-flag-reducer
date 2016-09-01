#!/bin/bash
./node_modules/.bin/mocha-webpack \
  --webpack-config ./webpack.config.test.js \
  --recursive \
  -R mocha-pretty-spec-reporter \
  'test/*.spec.js' \
  $*
