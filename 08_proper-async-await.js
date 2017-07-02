/**
 * Same code as previously, but this time with a proper "await" for our promise2.
 */

// 'await' can only be used in an 'async' function
(async () => {
  try {
    // 'await' with anything asynchronous that returns a promise
    await Promise.resolve(1)
    await promise2()
  } catch (err) {
    console.error('Catch in main function:', err)
  }
})()

// Function containing our nested promise chain
function promise2() {
  return Promise.resolve(2)
    .then(() => {
      // Block that can contain an error
      throw new Error('Fail 02...')
    })
    .catch(err => {
      // Pushing the error to the upper level
      throw new Error(`Error in promise2(): ${err.message}`)
    })
}
