import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListingItem from "../components/ListingItem";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Home({ user, handleCardClick }) {
  const [listings, setListings] = useState([]);
  const [homeLoaded, setIsHomeLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

  useEffect(() => {
    fetch("/listings")
      .then((res) => res.json())
      .then((listings) => {
        setListings(listings);
        filterCategories(listings);
        setIsHomeLoaded(true);
      });
  }, []);

  function filterCategories(listings) {
    const catArr = listings.map((listing) => listing.category);
    const filteredCatArr = [...new Set(catArr)];

    setCategories(filteredCatArr);
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

  function handleDelete(id) {
    const configObjDELETE = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(`/listings/${id}`, configObjDELETE).then(() => {
      const filteredListings = listings.filter((listing) => listing.id !== id);

      setListings(filteredListings);
    });
  }

  const afterSearch = listings.filter((item) => {
    if (currentSearch === "") {
      return item;
    } else if (
      item.what_it_is.toLowerCase().includes(currentSearch.toLowerCase())
    ) {
      return item;
    } else {
      return null;
    }
  });

  // changed to afterSearch from listings
  const renderListings = afterSearch.map((listing) => {
    return (
      <ListingItem
        key={listing.id}
        listing={listing}
        user={user}
        handleCardClick={handleCardClick}
        handleDelete={handleDelete}
      />
    );
  });

  const filterResult = (selectedCategory) => {
    fetch("/listings")
      .then((res) => res.json())
      .then((data) => {
        let selection = data.filter(
          (datum) => datum.category === selectedCategory
        );
        setListings(selection);
      });
  };

  const renderCategories = categories.map((category, index) => {
    return (
      <Dropdown.Item key={index} onClick={() => filterResult(category)}>
        {category}
      </Dropdown.Item>
    );
  });

  if (!homeLoaded) return <h3>Loading...</h3>;

  return (
    <div>
      <Container fluid>
        <Row className="d-flex justify-content-end my-2">
          <Col className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 my-0 h-100">
            <InputGroup className="h-100 py-2 my-0">
              <FormControl
                placeholder="Search Listings..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                className="h-100 py-2 my-0"
                name="search"
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                className="h-100 py-2"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
            <Dropdown as={ButtonGroup}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleSortAlphabetically()}
              >
                Sort A-Z
              </Button>

              <Dropdown.Toggle
                split
                variant="primary"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>{renderCategories}</Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={3} lg={4}>
          {renderListings}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
