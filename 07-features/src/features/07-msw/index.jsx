import { useEffect, useState } from "react";

async function getUsers() {
  const res = await fetch("https://localhost:8080/users");
  const data = await res.json();
  return data;
}

const MockServiceWorker = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(res => setUsers(res.users));
  }, []);

  if (users.length === 0) return <h1>No users found...</h1>;

  return (
    <div>
      {users.map(user => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
};
export default MockServiceWorker;
