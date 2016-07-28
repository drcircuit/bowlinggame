#Bowling Game Kata
##Made famous by Uncle Bob (Robert C. Martin - Check him out, he is awesome!)
A Javascript implementation of the classic TDD Bowling Game Kata

Tests involved developing this little Bowling Game:
* Initial Test - Setup executable environment
  * Initialize Node project
  * add mocha and chai
  * setup test command
  * setup ide to do tests
  * create spec file in test directory
  * write init test
  * run first failing test
  * write module that exports bowling game object
  * run first passing test

* First test
  * Check that you can roll
  * Run failing
  * Write roll method
  * Run passing

* Second test
  * Check that you can score
  * Run failing
  * Write score method
  * Run passing

* Third test
  * Check that you can score a gutter game
  * Run failing
  * Make pass
  * Run passing

* Fourth Test
  * Check that you can score a game with single pins on every roll
  * Run failing
  * Make pass
  * Run passing

* Fifth Test
  * Check that you can score a single spare
  * Run failing
  * Make pass
  * Run passing

* Sixth Test
  * Check that you can score a strike
  * Run failing
  * Cannot make pass, design is wrong
  * Comment out test and start refactoring

* Back to fifth test
  * Refactor while passing
  * move scoring rules to scoring function
  * Keep passing while refactoring
* Uncomment Sixth test
  * Make pass

* Seventh Test
  * Check that you can score a perfect game
  * Run passing test
  * Refactor into helper function that expresses intent
  * Show your friends!

#TDD ROCKS!
