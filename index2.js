module.exports = {test}

function test (label, fn) {
  try {
    fn()
    done(null, label)
  } catch (err) {
    done(err, label)
  }
}

function done (err, label) {
  if (err) {
    console.error('✘', label)
  } else {
    console.log('✔', label)
  }
}
