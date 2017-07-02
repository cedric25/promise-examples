/**
 * async / await with no exception and a proper result.
 */

// 'await' can only be used in an 'async' function
(async () => {
  try {
    // 'await' with anything asynchronous that returns a promise
    await Promise.resolve(1)
    const result = await promise2()
    console.log('Result:', result)
  } catch (err) {
    console.error('Catch in main function:', err)
  }
})()

// Function containing our nested promise chain
function promise2() {
  return Promise.resolve(2)
    .then(() => {
      return 42
    })
    .catch(err => {
      // Pushing the error to the upper level
      throw new Error(`Error in promise2(): ${err.message}`)
    })
}