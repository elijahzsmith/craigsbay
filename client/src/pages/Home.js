import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ListingItem from "../components/ListingItem";

function Home({ user, handleCardClick }) {
  const [listings, setListings] = useState([]);
  const [homeLoaded, setIsHomeLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    fetch("/listings")
      .then((res) => res.json())
      .then((listings) => {
        setListings(listings);
        filterCategories(listings)
        setIsHomeLoaded(true);
      })

  }, []);

  function filterCategories(listings) {
    const catArr = listings.map(listing => listing.category);
    const filteredCatArr = [...new Set(catArr)];

    setCategories(filteredCatArr)
  }

  const handleSortAlphabetically = () => {
    if (filtered === false) {
      const sortedListings = listings.sort(function (a, b) {
        let x = a.what_it_is.toLowerCase();
        let y = b.what_it_is.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setListings(sortedListings);
      setFiltered(true);
    } else {
      const originalArray = listings.sort(function (a, b) {
        return a.id - b.id;
      });
      setListings(originalArray);
      setFiltered(false);
    }
  };

  const renderListings = listings.map((listing) => {
    return (
      <ListingItem
        key={listing.id}
        listing={listing}
        user={user}
        handleCardClick={handleCardClick}
      />
    );
  });

  const filterResult = (selectedCategory) => {
    fetch("/listings")
      .then((r) => r.json())
      .then((data) => {
        let selection = data.filter(datum => datum.category === selectedCategory)
        setListings(selection)
      })
  }

  const renderCategories = categories.map((category, index) => {
    return <Dropdown.Item key={index} onClick={() => filterResult(category)}>{category}</Dropdown.Item>
  })

  if (!homeLoaded) return <h3>Loading...</h3>;

  return (
    <Container fluid>

      <Row className="d-flex justify-content-end my-2">
        <Col className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
          <Dropdown as={ButtonGroup}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleSortAlphabetically()}
            >
              Sort A-Z
            </Button>

            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

            <Dropdown.Menu>
              {renderCategories}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row xs={1} sm={2} md={3} lg={4}>
        {renderListings}
      </Row>
    </Container>
  );
}

export default Home;
