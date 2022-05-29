import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

function EditProfileForm({ user, handleEditProfile }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    age: "",
    password: "",
  });
  const history = useHistory();

  const { name, username, age } = user;

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container fluid>
      <Container className="mx-auto mt-5">
        <Row className="text-center">
          <h1>Edit Profile</h1>
        </Row>

        <Row className="mb-5">
          <Form onSubmit={(e) => handleEditProfile(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={name}
                onChange={(e) => handleChange(e.target.value)}
                value={formData.name}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder={username}
                onChange={(e) => handleChange(e.target.value)}
                value={formData.username}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="password"
                placeholder={age}
                // onChange={(e) => setPasswordInput(e.target.value)}
                // value={passwordInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={formData.password}
              />
            </Form.Group>

            <Row className="d-flex justify-content-center mb-2">
              <Button variant="primary" type="submit" className="w-25">
                Save Changes
              </Button>
            </Row>
          </Form>
        </Row>

        <Row>
          <Button
            className="w-25 mx-auto"
            variant="warning"
            onClick={() => history.push("/profile")}
          >
            Exit Edit Form
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default EditProfileForm;

{
  /* <div>
  <h1>Edit Profile</h1>
  <form onSubmit={(e) => saveChanges(e)}></form>
  <label>Name</label>
  <input type="text" placeholder={name}></input>
  <label>Username</label>
  <input type="text" placeholder={name}></input>
  <label>Password</label>
  <input type="text" placeholder={name}></input>
  <button type="submit">Save Changes</button>
  <button onClick={handleClick}>Exit Edit Form</button>
</div>; */
}
