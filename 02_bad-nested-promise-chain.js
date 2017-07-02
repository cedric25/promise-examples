/**
 * Error thrown in a nested promise chain, not caught!
 *
 * We get a warning from Node in the console:
 * "(node:43436) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: Fail 02..."
 * "(node:43436) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code."
 */

Promise.resolve(1)
  .then(() => {
    Promise.resolve(2)
      .then(() => {
        throw new Error('Fail 02...')
      })
  })
  .catch(err => {
    console.error('Catch in main function:', err)
  })
