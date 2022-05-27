import React from 'react'
import Card from 'react-bootstrap/Card'

function FavItem({ fav }) {
    const id = fav.id

    const {
        what_it_is,
        image_url,
        location,
        description
    } = fav.listing

    const handleRemoveFavorite = (id) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`/favorites/${id}`, configObj)
    }

    return (
        <Card>
            <h1>{what_it_is}</h1>
            <img src={image_url} alt="listing" />
            <h1>{location}</h1>
            <p>{description}</p>
            <button onClick={() => handleRemoveFavorite(id)} />
            <label>Remove from Favorites</label>
        </Card>
    )
}

export default FavItem