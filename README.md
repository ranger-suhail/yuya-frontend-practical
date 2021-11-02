# Setup

```
cd server
npm install
npm run dev
```

Open another terminal

```
cd frontend
npm install
npm start
```

# Questions

## Question 1

Please use `fetch` or another library like `Axios` to retrieve the customer details with the id from the url.
Then, display the customer details in the page as an organized HTML.
You don't need to add beautiful styling.
For Question 1, you don't need to worry about error handling.
While you develop the frontend, please define and apply types and interfaces when you need. Also, please avoid using `any` type if possible.

V1 endpoint is `http://localhost:3001/api/v1/customers/${customerId}`

<img width="657" alt="React_App" src="https://user-images.githubusercontent.com/1451339/135393907-e55b63a0-3e64-4371-916c-02e42bb125b9.png">


## Question 2

Please copy and paste your CustomerV1 code.
Then, handle the error cases. In V2, the server randomly returns the 500 Internal Server Error with message.
Also, when the customer ID is 2, it responds with 404 Not Found.
When the server responds with an error, display the error message to the user.
Also, fetching might fail. In that case, display an error message "Failed to fetch the customer details" to the user.

* Case 1: 500 Internal Server Error
* Case 2: 404 Not Found
* Case 3: Connection error (eg timeout)

V2 endpoint is `http://localhost:3001/api/v2/customers/${customerId}`

<img width="462" alt="React_App-2" src="https://user-images.githubusercontent.com/1451339/135393918-5d458b70-e862-4166-910a-80849c92db9a.png">

## Question 3

Question 3. Please copy and paste your CustomerV2 code.
Now, the V3 server might responds with a super user object.
customer ID 1 is the super user.
Please define a type for super users and show the details of users.

V3 endpoint is `http://localhost:3001/api/v3/customers/${customerId}`

<img width="425" alt="Cursor_and_React_App" src="https://user-images.githubusercontent.com/1451339/135393950-9ddd1076-0c74-478c-be68-7ba5f806390d.png">


## Question 4

Question 4. Please copy and paste your CustomerV3 code.
Please make the web page beautiful. You can use any libraries you like.
