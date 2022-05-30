import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

function EditYourListingForm() {
  const history = useHistory();
  let locate = useLocation();
  const { id, location, image_url, what_it_is, category, description } =
    locate.state;
  const [editFormData, setEditFormData] = useState({
    location,
    image_url,
    what_it_is,
    category,
    description,
  });

  console.log("locate: ", locate.state);

  const configObjPATCH = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(editFormData),
  };

  const handleChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSaveChanges = (e) => {
    console.log(e, id);
    e.preventDefault();
    fetch(`/listings/${id}`, configObjPATCH)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch response: ", data);
        setEditFormData({
          location,
          image_url,
          what_it_is,
          category,
          description,
        });
        history.push("/yourlistings");
      });
  };

  return (
    <div>
      <h1>Edit Your Listing Form</h1>
      <Container fluid>
        <Container className="mx-auto mt-5">
          <Row className="text-center">
            <h1>Edit Listing</h1>
          </Row>

          <Row className="mb-5">
            <Form onSubmit={(e) => handleSaveChanges(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${location}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.location}
                  name="location"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${image_url}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.name}
                  name="image_url"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>What it is</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${what_it_is}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.username}
                  name="what_it_is"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${category}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.category}
                  name="category"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${description}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.description}
                  name="description"
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
              onClick={() => history.push("/yourlistings")}
            >
              Exit Edit Form
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default EditYourListingForm;
