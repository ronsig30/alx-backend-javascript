function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      reject(new Error('Failed to get the payment token'));
    }
  });
}


module.exports = getPaymentTokenFromAPI;
