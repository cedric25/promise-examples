/**
 * Side-note: By passing a reference to the function,
 * it will automatically be called with the result of the previous promise.
 */

Promise.resolve(1)
  .then(promise2)
  .catch(err => {
    console.error('Catch in main function:', err)
  })

// Function containing our nested promise chain
function promise2(param) {

  console.log('param', param)

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
