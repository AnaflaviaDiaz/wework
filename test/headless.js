global.window = global;
global.assert = require("chai").assert;

// require archivo que testearan
require("../src/js/data.js")
require("./test.spec.js");
