set -x

#!/bin/bash
./node_modules/.bin/mocha \
  --compilers js:babel-register \
  -R mocha-pretty-spec-reporter \
  'makeFlagReducer.spec.js' \
  $*
