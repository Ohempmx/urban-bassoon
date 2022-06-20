var tap = require("../")
  , test = tap.test

test("meta test", { skip: false }, function (t) {

  function thr0w() { throw new Error('raburt') }
  function noop () {}

  // this also tests the ok/notOk functions
  t.once("end", section2)
  t.ok(true, "true is ok")
  t.ok(noop, "function is ok")
  t.ok({}, "object is ok")
  t.ok(t, "t is ok")
  t.ok(100, "number is ok")
  t.ok("asdf", "string is ok")
  t.notOk(false, "false is notOk")
  t.notOk(0, "0 is notOk")
  t.notOk(null, "null is notOk")
  t.notOk(undefined, "undefined is notOk")
  t.notOk(NaN, "NaN is notOk")
  t.notOk("", "empty string is notOk")
  t.throws(thr0w, "Thrower throws");
  t.doesNotThrow(noop, "noop does not throw");

  // a few failures.
  t.ifError(new Error("this is an error"))
  t.ifError({ message: "this is a custom error" })
  t.ok(false, "false is not ok")
  t.notOk(true, "true is not not ok")
  t.throws(noop, "noop does not throw");
  t.doesNotThrow(thr0w, "thrower does throw");
  t.end()

  function section2 () {
    var results = t.results
    t.clear()
    t.ok(true, "sanity check")
    t.notOk(results.ok, "not ok")
    t.equal(results.tests, 20, "total test count")
    t.equal(results.passTotal, 14, "tests passed")
    t.equal(results.fail, 6, "tests failed")
    t.type(results.ok, "boolean", "ok is boolean")
    t.type(results.skip, "number", "skip is number")
    t.type(results, "Results", "results isa Results")
    t.type(t, "Test", "test isa Test")
    t.type(t, "Harness", "test isa Harness")
    t.end()
  }
})


