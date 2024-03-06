// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const success = true; // You can change this value to simulate success or failure
      if (success) {
        resolve('Success');
      } else {
        reject('Failure');
      }
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;
