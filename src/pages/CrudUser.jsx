import React from 'react'
import { useEffect, useState } from "react"

function CrudUser() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)

    let my_key = process.env.REACT_APP_ACCESS_TOKEN;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+my_key);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://localhost:3000/user", requestOptions)
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className="CrudUser">
      {loading ? (
        <div>Loading...</div>
      ) : (
      
      <div className='container'>

        <h1>Users</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Is Active</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">

            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Active" : "No active"}</td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

      )}
    </div>
  )
}

export default CrudUser