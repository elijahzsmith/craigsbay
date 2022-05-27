import React from 'react'
import Card from "react-bootstrap/Card";
import { useLocation } from 'react-router-dom'

function ListingDetails() {

    let locatio = useLocation();
    console.log(locatio.state)
    const {what_it_is,image_url,location,description} = locatio.state
  return (
    <Card>
      <h1>{what_it_is}</h1>
      <img src={image_url} alt="listing" />
      <h1>{location}</h1>
      <p>{description}</p>
    </Card>
  )
}

export default ListingDetails