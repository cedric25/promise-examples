/**
 * Proper catch block in the nested promise chain.
 */

Promise.resolve(1)
  .then(() => {
    Promise.resolve(2)
      .then(() => {
        throw new Error('Fail 02...')
      })
      .catch(err => {
        console.error('Catch in nested promise chain:', err)
      })
  })
  .catch(err => {
    console.error('Catch in main function:', err)
  })
