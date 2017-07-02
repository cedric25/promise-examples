/**
 * Same result than in the previous example, but by passing the reference
 * to the child function in the first .then(...)
 */

Promise.resolve(1)
  .then(promise2)
  .catch(err => {
    console.error('Catch in main function:', err)
  })

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
