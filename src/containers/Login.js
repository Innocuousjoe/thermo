import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";


export default function Login() {
  const uuidv4_1 = require("uuidv4")
  const [thermoID, setThermoID] = useState("");

  function validateForm() {
    return uuidv4_1.isUuid(thermoID)
  }

  function handleSubmit(event) {
    event.preventDefault();

    
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="thermoID" bsSize="large">
          <FormControl
            autoFocus
            type="thermoID"
            value={thermoID}
            onChange={e => setThermoID(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}