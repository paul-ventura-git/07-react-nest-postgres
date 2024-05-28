import React from 'react'

function Token() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "eyJzdWIiOjEsInVzZXJuYW1lIjoiUGF1bCIsImlhdCI6MTcxNTEzNjcyNywiZXhwIjoxNzE1MTQwMzI3fQ");

  const raw = JSON.stringify({
    "username": "aaron",
    "password": "123"
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:3000/auth/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  return (
    <div>Token</div>
  )
}

export default Token

