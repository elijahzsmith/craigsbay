import React, { useEffect, useState } from 'react'
import FavItem from '../components/FavItem'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function Favorites({ handleCardClick }) {
    const [favs, setFavs] = useState([])
    const [favsLoaded, setFavsLoaded] = useState(false)

    useEffect(() => {
        fetch("/favorites")
            .then(res => res.json())
            .then(favs => {
                console.log(favs)
                setFavs(favs)
                setFavsLoaded(true)
            })
    }, [])

    const handleRemoveFavorite = (id) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`/favorites/${id}`, configObj)
            .then(setFavs(favs.filter((fav) => fav.id !== id)))
    }

    const renderFavs = favs.map((fav) => <FavItem key={fav.id} fav={fav} handleRemoveFavorite={handleRemoveFavorite} handleCardClick={handleCardClick} />)

    if (!favsLoaded) return <h3>Loading...</h3>

    return (
        <Container fluid>
            <Row xs={1} sm={2} md={3} lg={4}>
                {renderFavs}
            </Row>
        </Container>

    )
}

export default Favorites