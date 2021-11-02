import { useState, useEffect } from 'react';
import axios from 'axios';

import { getQueryId } from '../utils';

type Customer = {
  id: number;
  customer: {
    id: number;
    name: string;
    trust_score: number;
    address: string;
    devices: Array<{
      os: {
        name: string;
        version: string;
      };
      use_count: number;
    }>;
  };
};

export const CustomerV1 = () => {
  const id = getQueryId(window.location.search);
  const [customer, setCustomer] = useState<Customer>();

  // Question 1: Please use fetch or another library and fetch the customer details with the id from the url.
  // Then, display the customer details in the page as an organized HTML.
  // You don't need to add beautiful styling.
  // For Question 1, you don't need to worry about error handling.
  useEffect(() => {
    const fetchCustomer = async (customerId: string) => {
      const endpoint = `http://localhost:3001/api/v1/customers/${customerId}`;
      // TODO: implement

      const res = await axios.get<Customer>(endpoint);

      console.log(res.data);

      setCustomer(res.data);
    };
    if (id !== null) {
      fetchCustomer(id);
    }
  }, [id]);

  if (!customer) return null;

  console.log(customer);

  return (
    <div>
      <h1>CustomerV1</h1>
      <div>id: {id}</div>
      <div>customer id: {customer.customer.id}</div>
      <div>trust_score: {customer.customer.trust_score}</div>
      <div>address: {customer.customer.address}</div>
      <div>
        devices:
        <ul>
          {customer.customer.devices.map((device) => (
            <li
              key={`device-${device.os.name}`}
            >{`${device.os.name} ${device.os.version} ${device.use_count}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
