import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import { getQueryId } from '../utils';

enum CustomerType {
  NORMAL = 'normal',
  SUPER = 'super',
}

interface BaseCustomer {
  id: number;
  name: string;
  trust_score: number;
  devices: Array<{
    os: {
      name: string;
      version: string;
    };
    use_count: number;
  }>;
}

interface SuperCustomer extends BaseCustomer {
  address: {
    district: string;
    point: string;
  };
  customer_type: CustomerType.SUPER;
}

interface NormalCustomer extends BaseCustomer {
  address: string;
  customer_type: CustomerType.NORMAL;
}

type Customer = SuperCustomer | NormalCustomer;

export const CustomerV3 = () => {
  const id = getQueryId(window.location.search);
  const [customer, setCustomer] = useState<Customer>();
  const [errorMessage, setErrorMessage] = useState('');

  // Question 1: Please use fetch or another library and fetch the customer details with the id from the url.
  // Then, display the customer details in the page as an organized HTML.
  // You don't need to add beautiful styling.
  // For Question 1, you don't need to worry about error handling.
  useEffect(() => {
    const fetchCustomer = async (customerId: string) => {
      const endpoint = `http://localhost:3001/api/v3/customers/${customerId}`;
      // TODO: implement
      // axios
      //   .get<Customer>(endpoint)
      //   .then((res) => {
      //     setCustomer(res.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setErrorMessage((error as AxiosError).response?.data.message);
      //   });

      try {
        const res = await axios.get<{ id: number; customer: Customer }>(
          endpoint,
        );
        setCustomer(res.data.customer);
      } catch (error) {
        console.log((error as AxiosError).response?.data.message);
        setErrorMessage((error as AxiosError).response?.data.message);
      }
    };
    if (id !== null) {
      fetchCustomer(id);
    }
  }, [id]);

  return (
    <div>
      <h1>CustomerV2</h1>
      <div>id: {id}</div>
      {errorMessage && <p>{errorMessage}</p>}
      {customer && (
        <>
          <div>customer id: {customer.id}</div>
          <div>trust_score: {customer.trust_score}</div>
          {customer.customer_type === CustomerType.SUPER ? (
            <>
              <div>address point: {customer.address.point}</div>
              <div>address district: {customer.address.district}</div>
            </>
          ) : (
            <div>address: {customer.address}</div>
          )}
          <div>
            devices:
            <ul>
              {customer.devices.map((device) => (
                <li
                  key={`device-${device.os.name}`}
                >{`${device.os.name} ${device.os.version} ${device.use_count}`}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
