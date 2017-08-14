const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const holder = {a: {b: 2}}
const a = ['a', 'b']

const suite = new Benchmark.Suite();

suite.add("Rambda#pick", () => {
  R.pick(a)(holder)
})
.add("Ramda", () => {
  Ramda.pick(a)(holder)
})
.add("Lodash", () => {
  _.pick(holder, a)
})
module.exports = suite;