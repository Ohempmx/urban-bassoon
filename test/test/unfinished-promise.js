var t = require('../..')
t.test('parent', function (t) {
  return t.test('child', function (t) {
    return t.test('grandchild', function (t) {
      t.plan(2)
      t.pass('ok')
    })
  })
})
