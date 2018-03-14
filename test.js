'use strict'

var test = require('tape')
var windowScrollPosition = require('./')

test('window', function (t) {
  document.body.style.position = 'relative'
  document.body.style.width = '100px'
  document.body.style.height = '100px'

  window.scrollTo(50,50)

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
