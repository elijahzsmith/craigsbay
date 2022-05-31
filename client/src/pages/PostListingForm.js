import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

function PostListingForm({ user }) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    location: "",
    image_url: "",
    what_it_is: "",
    category: "",
    description: "",
    end_time: "",
    user_id: user.id,
  });

  const [timerID, setTimerID] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleAddListing = (e) => {
    e.preventDefault();
    fetch("/listings", configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTimerID(data.id)
        setFormData({
          location: "",
          image_url: "",
          what_it_is: "",
          category: "",
          description: "",
          end_time: "",
          user_id: user.id,
        });
        alert("Post Successful");
        history.push("/yourlistings");
      })

  };

  useEffect(() => {
    const configObjTimer = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        listing_id: timerID
      })
    }

    // console.log(timerID)

    fetch("/timers", configObjTimer)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [timerID])

  return (
    <Container fluid>
      <Container className="mx-auto mt-5">
        <Row className="text-center">
          <h1>Post A Listing</h1>
        </Row>

        <Row className="mb-5">
          <Form onSubmit={(e) => handleAddListing(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="Location..."
                value={formData.location}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image_url"
                placeholder="Image Url..."
                value={formData.image_url}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>What it is</Form.Label>
              <Form.Control
                type="text"
                name="what_it_is"
                placeholder="What it is..."
                value={formData.what_it_is}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Category..."
                value={formData.category}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Description..."
                value={formData.description}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="text"
                name="end_time"
                placeholder="End date..."
                value={formData.end_time}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Row className="d-flex justify-content-center mb-2">
              <Button variant="primary" type="submit" className="w-25">
                Post Listing
              </Button>
            </Row>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}

export default PostListingForm;
