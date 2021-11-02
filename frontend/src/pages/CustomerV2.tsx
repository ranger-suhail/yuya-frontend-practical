// Question 2. Please copy and paste your CustomerV1 code.
// Then, handle the error cases. In V2, the server randomly returns an error with message.
// When the server responds with an error, display the error message to the user.
// Also, fetching might fail. In that case, display an error message "Failed to fetch the customer details" to the user.
//
// Case 1: 500 Internal Server Error
// Case 2: 404 Not Found
// Case 3: Connection error (eg timeout). "Failed to fetch the customer details"
//
// V2 endpoint is `http://localhost:3001/api/v2/customers/${customerId}`

export const CustomerV2 = () => {
  return <h1>CustomerV2</h1>;
};
