/**
 * A possible good way of doing would be to extract the nested promise chain
 * in its own function, and throwing any error up to the caller function.
 */

Promise.resolve(1)
  .then(() => {
    return promise2()
  })
  .catch(err => {
    console.error('Catch in main function:', err)
  })

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
