import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const RockNew = ({ createRock }) => {
  const navigate = useNavigate();
  const [newRock, setNewRock] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  });

  const handleChange = (e) => {
    setNewRock({ ...newRock, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createRock(newRock);
    navigate("/rockindex");
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="name">Please Enter a Name:</Label>
          <Input
            type="text"
            id="name" // Add id attribute for association
            name="name"
            placeholder="The Boulder.."
            onChange={handleChange}
            value={newRock.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rock-age">Please Enter Age:</Label>
          <Input
            type="number"
            id="rock-age" // Add id attribute for association
            name="age"
            placeholder="103,678,100"
            onChange={handleChange}
            value={newRock.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rock-enjoys">What are your hobbies?</Label>
          <Input
            type="text"
            id="rock-enjoys" // Add id attribute for association
            name="enjoys"
            placeholder="Enjoys long rolls down the beach..."
            onChange={handleChange}
            value={newRock.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rock-image">Please Upload a photo here!</Label>
          <Input
            type="url"
            id="rock-image" // Add id attribute for association
            name="image"
            placeholder="Please attach a url here"
            onChange={handleChange}
            value={newRock.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Rock
        </Button>
      </Form>
    </>
  );
};

export default RockNew;
