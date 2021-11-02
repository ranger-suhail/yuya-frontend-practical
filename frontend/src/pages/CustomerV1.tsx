import { useEffect } from "react";
import { getQueryId } from "../utils";

export const CustomerV1 = () => {
  const id = getQueryId(window.location.search);

  // Question 1: Please use fetch or another library and fetch the customer details with the id from the url.
  // Then, display the customer details in the page as an organized HTML.
  // You don't need to add beautiful styling.
  // For Question 1, you don't need to worry about error handling.
  useEffect(() => {
    const fetchCustomer = async (customerId: string) => {
      const endpoint = `http://localhost:3001/api/v1/customers/${customerId}`;
      // TODO: implement
    };
    if (id !== null) {
      fetchCustomer(id);
    }
  }, [id]);

  return (
    <div>
      <h1>CustomerV1</h1>
      <div>id: {id}</div>
      <div></div>
    </div>
  );
};
