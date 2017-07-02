/**
 * A simple one-level promise chain with a proper ‘catch’ block at the end.
 */

Promise.resolve(1)
  .then(() => {
    throw new Error('Fail 01...')
  })
  .catch(err => {
    console.error('Catch in main function:', err)
  })
