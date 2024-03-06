function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Success');
      } else {
        reject('Failure');
      }
    }, 2000);
  });
}

export default getResponseFromAPI;
