/**
 * async / await in its own function.
 * We now have three levels of promise chains.
 */

myFunction()
  .then(result => {
    console.log('Result:', result)
  })
  .catch(err => {
    console.error('Catch in main function:', err)
  })

// Following code line won't work as we are not in an async function:
// const res = await myFunction()

async function myFunction() {
  try {
    // 'await' with anything asynchronous that returns a promise
    await Promise.resolve(1)
    return await promise2()
  } catch (err) {
    throw new Error(`Error in myFunction(): ${err.message}`)
  }
}

// Function containing our nested promise chain
function promise2() {
  return Promise.resolve(2)
    .then(() => {

      // Proper result:
      return 42

      // Or an error:
      // throw new Error('Fail 02...')
    })
    .catch(err => {
      // Pushing the error to the upper level
      throw new Error(`Error in promise2(): ${err.message}`)
    })
}