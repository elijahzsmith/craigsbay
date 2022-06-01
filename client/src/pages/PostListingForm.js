import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
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
    month: "",
    day: "",
    year: "",
    time: "",
    user_id: user.id,
  });

  const [timerID, setTimerID] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      location: formData.location,
      image_url: formData.image_url,
      what_it_is: formData.what_it_is,
      category: formData.category,
      description: formData.description,
      end_time: `${formData.month}/${formData.day}/${formData.year} ${formData.time}`,
      user_id: user.id,
    }),
  };

  const handleAddListing = (e) => {
    e.preventDefault();
    fetch("/listings", configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        setTimerID(data.id);
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
      });
  };

  useEffect(() => {
    const configObjTimer = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        listing_id: timerID,
      }),
    };

    fetch("/timers", configObjTimer)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [timerID]);

  function renderMonths() {
    const currDate = new Date();
    const currMonth = currDate.getMonth();

    let upcomingMonths = [];

    for (let i = currMonth + 1; i < 13; i++) {
      upcomingMonths.push(i);
    }

    for (let i = 1; i < currMonth + 1; i++) {
      upcomingMonths.push(i);
    }

    upcomingMonths.unshift("Select Month");

    const monthOptions = upcomingMonths.map((month) => {
      return <option>{month}</option>;
    });

    return monthOptions;
  }

  function renderDays() {
    const currDate = new Date();
    const currDay = currDate.getDate();

    let upcomingDays = [];

    for (let i = currDay; i < 32; i++) {
      upcomingDays.push(i);
    }

    for (let i = 1; i < currDay; i++) {
      upcomingDays.push(i);
    }

    upcomingDays.unshift("Select Day");

    const dayOptions = upcomingDays.map((day) => {
      return <option>{day}</option>;
    });

    return dayOptions;
  }

  function renderYears() {
    const currDate = new Date();
    const currYear = currDate.getFullYear();

    let upcomingYears = [];

    for (let i = currYear; i < currYear + 5; i++) {
      upcomingYears.push(i);
    }

    upcomingYears.unshift("Select Year");

    const yearOptions = upcomingYears.map((year) => {
      return <option>{year}</option>;
    });

    return yearOptions;
  }

  function renderTimes() {
    const currDate = new Date();
    const currHour = currDate.getHours();

    let upcomingTimes = [];

    for (let i = currHour; i < 24; i++) {
      for (let j = 0; j < 60; j++)
        if (j < 10) {
          upcomingTimes.push(`${i}:0${j}`);
        } else {
          upcomingTimes.push(`${i}:${j}`);
        }
    }

    for (let i = 0; i < currHour; i++) {
      for (let j = 0; j < 60; j++)
        if (j < 10) {
          upcomingTimes.push(`${i}:0${j}`);
        } else {
          upcomingTimes.push(`${i}:${j}`);
        }
    }

    upcomingTimes.unshift("Select Time");

    const timeOptions = upcomingTimes.map((time) => {
      return <option>{time}</option>;
    });

    return timeOptions;
  }

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

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Month</Form.Label>
                  <Form.Select
                    name="month"
                    value={formData.month}
                    onChange={(e) => handleChange(e)}
                  >
                    {renderMonths()}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Day</Form.Label>
                  <Form.Select
                    name="day"
                    value={formData.day}
                    onChange={(e) => handleChange(e)}
                  >
                    {renderDays()}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Select
                    name="year"
                    value={formData.year}
                    onChange={(e) => handleChange(e)}
                  >
                    {renderYears()}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Time</Form.Label>
                  <Form.Select
                    name="time"
                    value={formData.time}
                    onChange={(e) => handleChange(e)}
                  >
                    {renderTimes()}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

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
