'use strict'

var test = require('tape')
var windowScrollPosition = require('./')

test('window', function (t) {
  document.body.style.position = 'relative'
  document.body.style.width = '31000px'
  document.body.style.height = '31000px'

  window.scrollTo(30000, 30000)

  t.deepEqual(windowScrollPosition(window), {
    left: document.documentElement.scrollWidth - window.innerWidth,
    top: document.documentElement.scrollHeight - window.innerHeight
  })

  window.scrollTo(window.innerWidth, window.innerHeight)

  t.deepEqual(windowScrollPosition(), {
    left: window.innerWidth,
    top: window.innerHeight
  })
  t.end()
})
