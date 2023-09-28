## Steps

#### Server

Open server directory.

- run "npm install" and "npm start"

#### Client

Open client directory

- run "npm install" and "npm run dev"

### HTTP Methods

HTTP (Hypertext Transfer Protocol) methods define the types of actions that can be performed on a web server to retrieve, modify or delete information. The most commonly used HTTP methods are GET, POST, PATCH and DELETE. GET retrieves data, POST sends data to be processed, PATCH update or replace existing data, DELETE removes data.

- can use fetch()

GET: This HTTP method is used to retrieve data from a server. When a client sends a GET request to a server, the server will return a response that includes the requested data. This method is typically used to retrieve information from a database, to read a web page, or to download a file. The HTTP GET method is the default method used by web browsers to retrieve data from a server, as it is a safe and efficient way to request resources.

```js
// HTTP GET example
try {
  const response = await axios.get("/api/data");
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

```js
// HTTP GET example
axios
  .get("/api/data")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

POST: The POST method is used to send data to a server to create or update a resource. When a client sends a POST request to a server, the server will process the request and create a new resource or update an existing one. This method is commonly used in web forms, where users enter information that is then sent to a server for processing.

```js
// HTTP POST example
try {
  const response = await axios.post("/api/data", { name: "John", age: 30 });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

PATCH: This method is similar to the POST method, but it is used to update only a part of a resource. When a client sends a PATCH request to a server, the server will update the resource with the new data provided in the request. This method is commonly used in REST APIs to update specific properties of a resource.

```js
// HTTP PATCH example
try {
  const response = await axios.patch("/api/data/1", { age: 31 });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

DELETE: The DELETE method is used to remove a resource from a server. When a client sends a DELETE request to a server, the server will delete the resource if it exists. This method is commonly used in REST APIs to remove a resource that is no longer needed or to undo a previous action.

```js
// HTTP DELETE example
try {
  const response = await axios.delete("/api/data/1");
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

CRUD stands for Create, Read, Update, and Delete, which are the basic operations that can be performed on a database or web application. These operations allow users to create new data, read existing data, update data, and delete data when necessary.

## React Query - v4

- React Query is a state management library that simplifies the process of fetching, caching, and updating data in React applications.
- Its major benefits include automatic background refetching, caching and stale data management, error handling, and easy pagination and infinite scrolling.
- Compared to setting up requests with useEffect, React Query provides a more declarative and centralized approach to managing data in React, which results in cleaner and more efficient code.
- It also reduces boilerplate code and improves performance by minimizing unnecessary re-renders and network requests.

[React Query](https://tanstack.com/query/v4/docs/react/overview)

### Install react-query

```sh
npm i @tanstack/react-query
```

#### Setup React Query

main.jsx

```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

### UseEffect Approach

```js
const fetchTasks = async () => {
  try {
    const response = await customFetch.get("/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchTasks();
}, []);
```

## First Query

Items.jsx

```js
import { useQuery } from "@tanstack/react-query";

const result = useQuery({
  queryKey: ["tasks"],
  queryFn: () => customFetch.get("/"),
});
console.log(result);
```

- Query example using fetch API

```js
const result = useQuery({
  queryKey: ["tasks"],
  queryFn: () =>
    fetch("http://localhost:5000/api/tasks/").then(res => res.json()),
});
console.log(result);
```

- Query Key

The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.

- Query Function

A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.
