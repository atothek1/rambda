const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const suite = new Benchmark.Suite();

const holder = [1,2,3,4]
const a = 3

suite.add("Rambda.dropLast", () => {
  R.dropLast(a)(holder)
})
.add("Ramda", () => {
  Ramda.dropLast(a)(holder)
})

module.exports = suite;