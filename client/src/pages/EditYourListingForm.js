import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

function EditYourListingForm({ showForm, setShowForm, listing }) {
  console.log(listing);
  const [editFormData, setEditFormData] = useState({
    location: "",
    image_url: "",
    what_it_is: "",
    category: "",
    description: "",
  });
  // if (!listing) {
  //   return null;
  // }
  const { id, location, image_url, what_it_is, category, description } =
    listing;
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

  const handleSaveChanges = (e, id) => {
    e.preventDefault();
    fetch(`/listings/${id}`, configObjPATCH)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEditFormData({
          location: "",
          image_url: "",
          what_it_is: "",
          category: "",
          description: "",
        });
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
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${location}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.location}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${image_url}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.name}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>What it is</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${what_it_is}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.username}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="password"
                  placeholder={`${category}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.category}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="password"
                  placeholder={`${description}...`}
                  onChange={(e) => handleChange(e)}
                  value={editFormData.description}
                />
              </Form.Group>

              <Row className="d-flex justify-content-center mb-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-25"
                  onClick={(e) => handleSaveChanges(e, id)}
                >
                  Save Changes
                </Button>
              </Row>
            </Form>
          </Row>

          <Row>
            <Button
              className="w-25 mx-auto"
              variant="warning"
              onClick={() => setShowForm((showForm) => !showForm)}
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
