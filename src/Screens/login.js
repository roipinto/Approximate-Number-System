// import React from 'react';
import './login.css';

// export default class login extends React.Component{
// render() {

//     return (

//         <div>
//             <h1>hey </h1>
//         </div>
//     );
// };
// };
//----------------------------------
import React, { useEffect, useState } from "react";
// import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> &nbsp;&nbsp;&nbsp;&nbsp;
            <Form.Label>שם</Form.Label>

        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />          
            <Form.Label>סיסמא</Form.Label>
        <h2></h2>
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          התחבר
        </Button>
      </Form>
    </div>
  );
}