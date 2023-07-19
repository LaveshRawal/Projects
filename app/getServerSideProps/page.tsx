import React from 'react';

export async function getServerSideProps() {
  // Fetch data from an API or any other data source
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json(); // receive the response, and extract the JSON data from the response body. The response.json() method parses the response body as JSON and returns a promise that resolves to a JavaScript object representing the parsed JSON data.

  // Log the fetched data to verify
  console.log('Response status:', response.status);

  // Pass the fetched data as props to the component
  return {
    props: {
      data,
    },
  };
}


interface RootProps {
  data: {
    id: number;
    title: string;
    body: string;
  }[];
}

const Root: React.FC<RootProps> = ({ data }) => {
  console.log(data);
  // Render the component using the fetched data
  return (
    <div>
      <h1>Server-side rendering (SSR)</h1>
      <p>
        Server-side rendering (SSR): Next.js allows you to fetch data during the
        server-side rendering process, which means the data is fetched on the
        server before the page is sent to the client. This ensures that the data
        is available when the page is initially rendered. To fetch data on the
        server side, you can use the getServerSideProps function. Here an
        example of how you can use it:
      </p>

      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Root;
