"use client"
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api'


const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      const { props } = await fetchData();
      setData(props.data);
    }

    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Simple API Data Fetch ExampleComponent with useEffect</h2>
      <br />
      {data && data.map((user) => (
        <div key={user.id}>
          <h1>{user.id} {user.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
