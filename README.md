# Learning Travis CI and Coveralls [![Build Status](https://travis-ci.org/rgdelato/learning-travis-ci-and-coveralls.svg?branch=master)](https://travis-ci.org/rgdelato/learning-travis-ci-and-coveralls) [![Coverage Status](https://coveralls.io/repos/github/rgdelato/learning-travis-ci-and-coveralls/badge.svg?branch=master)](https://coveralls.io/github/rgdelato/learning-travis-ci-and-coveralls?branch=master)
A simple demo repo to get CI and test coverage tools up and running

### Tools used

* [Travis CI](https://travis-ci.org/) (.travis.yml file)
* [Coveralls](https://coveralls.io/) (sent via [node-coveralls](https://github.com/nickmerwin/node-coveralls))
* [tape](https://github.com/substack/tape) (and [tap-spec](https://github.com/scottcorgan/tap-spec)) for writing unit tests
* babel-node (from [babel-cli](https://babeljs.io/docs/usage/cli/)) for running ES6 code through Babel
* [nyc](https://github.com/bcoe/nyc) for generating code coverage reports
