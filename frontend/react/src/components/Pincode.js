import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

function Pincode() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  function handlePinChange(event) {
    const newPin = event.target.value.replace(/\D/g, "");
    setPin(newPin.slice(0, 6));
    setError("");
  }

  const addpin=()=>{
    console.log(pin);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (pin.length === 6) {
      // Do something with the valid pin
      console.log("Valid pin: ", pin);
    } else {
      setError("Invalid pin. Please enter 6 digits.");
    }
  }

  return (
    <div >
      
    <Form onSubmit={handleSubmit} className="row g-3">
      <FormGroup>
        <Label for="pin-input">Enter your 6-digit PIN code:</Label>
        <Input style={{ width: "150px" }}
          type="number"
          id="pin-input"
          name="pin"
          value={pin}
          onChange={handlePinChange}
          maxLength={6}
        />
        
      </FormGroup > 
      {error && <Alert color="danger">{error}</Alert>}
      <Button color="primary" type="submit" onClick={addpin}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Pincode;
