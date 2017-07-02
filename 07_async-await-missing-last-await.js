/**
 * Same code with async / await.
 *
 * Here, by mistake, we don't "await" our promise2,
 * so the error gets uncaught, with a warning from Node.
 * (Same warning as in '02_bad-nested-promise-chain.js')
 *
 * We don't 'await' the promise = We don't handle its result,
 * which could be an error!
 */

// 'await' can only be used in an 'async' function
(async () => {
  // Classic try / catch block
  try {
    // Synchronous way of reading
    // 'await' anything asynchronous that returns a promise
    await Promise.resolve(1)
    // Following code gets executed only after previous promise has been resolved
    promise2()
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
