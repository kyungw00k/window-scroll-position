/**
 * Get the current scroll position of target window
 *
 * @param w {Object} [w] target window
 * @returns {{top: number, left: number}}
 */
function windowScrollPosition (w) {
  var win = w || window
  var doc = win.document

  return {
    top: win.scrollY || win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop,
    left: win.scrollX || win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft
  }
}

module.exports = windowScrollPosition
